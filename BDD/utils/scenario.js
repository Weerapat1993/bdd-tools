const Case = require('case')
const shell = require('shelljs')
const MakeFile = require('./MakeFile')

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
import { combineDriver } from '../../../../config'

defineSupportCode(({ Given, When, Then }) => {
${data.stories.map((row) => {
    const type = row.trim().split(' ')[0]
    const msg = row.trim().split(' ').slice(1).join(' ')
    return StepFunction(type, msg.trim())
  }).join('')}
})
`

/**
 * Text Step Function
 * @param {string} type
 * @param {string} title
 * @param {Array.<string>} arrayFunction
 * @return {string}
 */
const StepFunction = (type, title) => `
  ${type === 'And' ? 'Given' : type}(/^${title.replace(/\(/g, '\\(').replace(/\)/g, '\\)')}$/, async () => {
    await combineDriver([
      // Function
    ])
  })
`

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
 * @param {Feature} Feature
 */
const CreateBDD = (Feature) => {
  const pwd = shell.pwd()
  const file = new MakeFile(pwd)
  const folderName = Case.camel(Feature.feature.name.split('(')[0].trim())
  const fileFeatureName = Case.camel(Feature.user.story.title)

  const fileFunction = `
/**
 * Click Login With Emial Button
 * @param {string} testID 
 */
export const clickLoginWithEmailButton = (testID) => device => (
  device.waitForElementByAccessibilityId(testID).click()
)  
`
  // Create File
  file
    .createDirectory(`/BDD/features/${folderName}`)
    .createFile(`/BDD/features/${folderName}/${fileFeatureName}.feature`, CreateFileFeature(Feature))
    .createDirectory(`/BDD/features/step_definitions`)
    .createDirectory(`/BDD/features/step_definitions/${folderName}`)
    .createDirectory(`/BDD/features/step_definitions/${folderName}/${fileFeatureName}`)
    .createDirectory(`/BDD/features/step_definitions/${folderName}/${fileFeatureName}/functions`)
    .createFile(`/BDD/features/step_definitions/${folderName}/${fileFeatureName}/functions/index.js`, fileFunction)
  Feature.scenarios.forEach((item) => {
    file.createFile(`/BDD/features/step_definitions/${folderName}/${fileFeatureName}/${item.sid.substr(8, 12).toLowerCase()}.${fileFeatureName}.step.js`, StepJS(item))
  })
  
  // Status
  file.status()
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
