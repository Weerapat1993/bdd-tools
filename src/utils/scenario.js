const fs = require('fs-extra')
const Case = require('case')
const shell = require('shelljs')
const chalk = require('chalk')
const MakeFile = require('./MakeFile')

// CONSTANTS
const FOLDER_BDD = 'BDD'

// Function
const Before = title => `Before ${title}\n`
const Given = title => `Given ${title}\n`
const When = title => `When ${title}\n`
const Then = title => `Then ${title}\n`
const And = title => `  And ${title}\n`
const But = title => `  But ${title}\n`
const After = title => `After ${title}\n`

/**
 * Senario Function
 * @param {string} code
 * @param {string} title
 * @param {[]} data
 * @return {string}
 */
const Scenario = (code, title, data) => `  @${code}
  Scenario: (${code.substring(8, 12)}) ${title}
${data.map(item => `    ${item}`).join('\n')}
`

/**
 * Text step.js File
 * @param {ArrayScenario} data
 * @return {string}
 */
const StepJS = data => `// @${data.sid}
import { defineSupportCode } from 'cucumber'
import { expect } from 'chai'
import { combineDriver, describe } from '../../../../config'

/**
 * Scenario: @${data.sid}${data.stories.map((row) => {
  return (`\n * ${row.trim()}`)
}).join('')}
 */
defineSupportCode(({ Given, When, Then }) => {
${data.stories.map((row, index) => {
    const type = row.trim().split(' ')[0]
    const msg = row.trim().split(' ').slice(1).join(' ')
    return StepFunction(type, msg.trim(), index)
  }).join('')}
})
`

/**
 * Text Step Function
 * @param {string} type
 * @param {string} title
 * @param {number} index
 * @return {string}
 */
const StepFunction = (type, title, index) => {
  const typeName = type === 'And' ? 'Given' : type
  const titleMessage = `/^${title.replace(/\(/g, '\\(').replace(/\)/g, '\\)')}$/`
  return ` 
  const STEP_${index + 1} = '${title}'
  ${typeName}(${titleMessage}, async () => {
    describe.${typeName}(STEP_${index + 1})
    await combineDriver([
      // Function
    ])
  })
`
}

// -------------------------------------------------------------------------

/**
 * Create File .feature
 * @typedef {Object} ArrayScenario
 * @property {string} sid
 * @property {string} scenario
 * @property {boolean} outline
 * @property {Array.<string>} stories
 * 
 * @typedef {Object} UserStory
 * @property {string} as
 * @property {string} want_to
 * @property {string} so_that
 * 
 * @typedef {Object} Feature
 * @property {{ fid: string, name: string }} feature
 * @property {{ uid: string, story: UserStory }} user
 * @property {Array.<ArrayScenario>} scenarios
 * 
 * @param {Feature} doc
 */
const CreateFileFeature = (doc) => {
  const { feature, user, scenarios } = doc
  return `@${feature.fid}
Feature: (${user.uid}) ${user.story.title}
  As ${user.story.as}
  I want to ${user.story.want_to}
  So that ${user.story.so_that}

${scenarios.map((item) => {
    const data = item
    return Scenario(item.sid, data.scenario, data.stories)
}).join('')}
`
}

// -----------------------------------------------

/**
 * Create BDD
 * @param {Array.<Feature>} Features
 */
const CreateBDD = (Features = []) => {
  const pwd = shell.pwd()
  const file = new MakeFile(pwd)
  if(!Features.length) {
    // console.log(chalk.yellowBright('Warning: Features in bbd.config.json is null'))
    return false
  }

  Features.forEach(Feature => {
    const folderName = Case.camel(Feature.feature.name.split('(')[0].trim())
    const fileFeatureName = Case.camel(Feature.user.story.title)

    // Create File
    file
      .createDirectory(`/${FOLDER_BDD}`)
      .copyFolderTemplate(`/config`, `/${FOLDER_BDD}/config`)
      .createDirectory(`/${FOLDER_BDD}/features`)
      .createDirectory(`/${FOLDER_BDD}/features/${folderName}`)
      .createFile(`/${FOLDER_BDD}/features/${folderName}/${fileFeatureName}.feature`, CreateFileFeature(Feature))
      .createDirectory(`/${FOLDER_BDD}/features/step_definitions`)
      .createDirectory(`/${FOLDER_BDD}/features/step_definitions/${folderName}`)
      .createDirectory(`/${FOLDER_BDD}/features/step_definitions/${folderName}/${fileFeatureName}`)
      .createDirectory(`/${FOLDER_BDD}/report`)
    Feature.scenarios.forEach((item) => {
      file.createFile(`/${FOLDER_BDD}/features/step_definitions/${folderName}/${fileFeatureName}/${item.sid.substr(8, 12).toLowerCase()}.${fileFeatureName}.step.js`, StepJS(item))
    })
  })

  // Status
  file.status()
}

// Get BDD Config ------------------------------------------------------------

/**
 * Get BDD Config in bdd.config.json
 * @typedef {Object} Config
 * @property {Array.<Feature>} BDD
 * 
 * @return {Config}
 */
const getBBDConfig = () => {
  const pwd = shell.pwd()
  try {
    const config = fs.readJSONSync(`${pwd}/bdd.config.json`, 'utf8')
    return config
  } catch(err) {
    console.log(chalk.red('Error: cannot file bdd.config.json'))
    return { BDD: [] }
  }
}

// Exports File -------------------------------------------------------------------------

exports.Before = Before
exports.Given = Given
exports.When = When
exports.Then = Then
exports.And = And
exports.But = But
exports.After = After

exports.Scenario = Scenario
exports.StepJS = StepJS
exports.CreateFileFeature = CreateFileFeature
exports.CreateBDD = CreateBDD
exports.getBBDConfig = getBBDConfig
