// @F036U002S002
import { defineSupportCode } from 'cucumber'
import { expect } from 'chai'
import { combineDriver, describe } from '../../../../config'

/**
 * Scenario: @F036U002S002
 * Given a member (who is signed in) is on "Personal Menu"
 * Given their favourites is NOT empty
 * When a member tap "My Favourite" menu
 * Then System navigate to My Favourite page
 * Then System display list of favourite product that is <data>
 */
defineSupportCode(({ Given, When, Then }) => {
 
  const STEP_1 = 'a member (who is signed in) is on "Personal Menu"'
  Given(/^a member \(who is signed in\) is on "Personal Menu"$/, async () => {
    describe.Given(STEP_1)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_2 = 'their favourites is NOT empty'
  Given(/^their favourites is NOT empty$/, async () => {
    describe.Given(STEP_2)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_3 = 'a member tap "My Favourite" menu'
  When(/^a member tap "My Favourite" menu$/, async () => {
    describe.When(STEP_3)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_4 = 'System navigate to My Favourite page'
  Then(/^System navigate to My Favourite page$/, async () => {
    describe.Then(STEP_4)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_5 = 'System display list of favourite product that is <data>'
  Then(/^System display list of favourite product that is <data>$/, async () => {
    describe.Then(STEP_5)
    await combineDriver([
      // Function
    ])
  })

})
