// @F036U002S002
import { defineSupportCode } from 'cucumber'
import { expect } from 'chai'
import { combineDriver, describe } from '../../../../config'

defineSupportCode(({ Given, When, Then }) => {

  Given(/^a member \(who is signed in\) is on "Personal Menu"$/, async () => {
    describe.Given('a member (who is signed in) is on "Personal Menu"')
    await combineDriver([
      // Function
    ])
  })

  Given(/^their favourites is NOT empty$/, async () => {
    describe.Given('their favourites is NOT empty')
    await combineDriver([
      // Function
    ])
  })

  When(/^a member tap "My Favourite" menu$/, async () => {
    describe.When('a member tap "My Favourite" menu')
    await combineDriver([
      // Function
    ])
  })

  Then(/^System navigate to My Favourite page$/, async () => {
    describe.Then('System navigate to My Favourite page')
    await combineDriver([
      // Function
    ])
  })

  Then(/^System display list of favourite product that is <data>$/, async () => {
    describe.Then('System display list of favourite product that is <data>')
    await combineDriver([
      // Function
    ])
  })

})
