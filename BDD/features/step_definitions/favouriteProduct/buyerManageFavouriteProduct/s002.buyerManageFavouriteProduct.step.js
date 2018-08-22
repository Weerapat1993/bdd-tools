// @F036U002S002
import { defineSupportCode } from 'cucumber'
import { combineDriver } from '../../../../config'

/**
 * Scenario: @F036U002S002
 * Given a member (who is signed in) is on "Personal Menu"
 * Given their favourites is NOT empty
 * When a member tap "My Favourite" menu
 * Then System navigate to My Favourite page
 * Then System display list of favourite product that is <data>
 */
defineSupportCode(({ Given, When, Then }) => {

  Given(/^a member \(who is signed in\) is on "Personal Menu"$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Given(/^their favourites is NOT empty$/, async () => {
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

  Then(/^System display list of favourite product that is <data>$/, async () => {
    await combineDriver([
      // Function
    ])
  })

})
