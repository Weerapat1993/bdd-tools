// @F036U002S001
import { defineSupportCode } from 'cucumber'
import { combineDriver } from '../../../../config'

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

  Given(/^a member \(who is signed in\) is on "Personal Menu"$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Given(/^their favourites is empty$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  When(/^a member tap "My Favourite" menu$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Then(/^System navigate to My Favourite page$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Then(/^System validate their Favourites is empty$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Then(/^System display guideline how to add product into My Favourite$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Then(/^System display button "Go shopping" that link to "MARKET" page$/, async () => {
    await combineDriver([
      // Function
    ])
  })

})
