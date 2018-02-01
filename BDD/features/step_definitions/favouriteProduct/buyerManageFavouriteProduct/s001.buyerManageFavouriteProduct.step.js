// @F036U002S001
import { defineSupportCode } from 'cucumber'
import { expect } from 'chai'
import { combineDriver, describe } from '../../../../config'

/**
 * Scenario: @F036U002S001
 * Given a member (who is signed in) is on "Personal Menu"
 * Given their favourites is empty
 * When a member tap "My Favourite" menu
 * Then System navigate to My Favourite page
 * Then System validate their Favourites is empty
 * Then System display guideline how to add product into My Favourite
 * Then System display button "Go shopping" that link to "MARKET" page
 */
defineSupportCode(({ Given, When, Then }) => {
 
  const STEP_1 = 'a member (who is signed in) is on "Personal Menu"'
  Given(/^a member \(who is signed in\) is on "Personal Menu"$/, async () => {
    describe.Given(STEP_1)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_2 = 'their favourites is empty'
  Given(/^their favourites is empty$/, async () => {
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
 
  const STEP_5 = 'System validate their Favourites is empty'
  Then(/^System validate their Favourites is empty$/, async () => {
    describe.Then(STEP_5)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_6 = 'System display guideline how to add product into My Favourite'
  Then(/^System display guideline how to add product into My Favourite$/, async () => {
    describe.Then(STEP_6)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_7 = 'System display button "Go shopping" that link to "MARKET" page'
  Then(/^System display button "Go shopping" that link to "MARKET" page$/, async () => {
    describe.Then(STEP_7)
    await combineDriver([
      // Function
    ])
  })

})
