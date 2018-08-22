// @F036U001S001
import { defineSupportCode } from 'cucumber'
import { combineDriver } from '../../../../config'

/**
 * Scenario: @F036U001S001
 * Given a member (who is signed in) is on "Product Detail" page
 * Given that product is not added to their favourites
 * When a member click "Star" icon (un-filled color star)
 * Then System add that product into their Favourites
 * Then System display message "Added to My favourite"
 * Then System change the star icon with filled color
 */
defineSupportCode(({ Given, When, Then }) => {

  Given(/^a member \(who is signed in\) is on "Product Detail" page$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Given(/^that product is not added to their favourites$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  When(/^a member click "Star" icon \(un-filled color star\)$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Then(/^System add that product into their Favourites$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Then(/^System display message "Added to My favourite"$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Then(/^System change the star icon with filled color$/, async () => {
    await combineDriver([
      // Function
    ])
  })

})
