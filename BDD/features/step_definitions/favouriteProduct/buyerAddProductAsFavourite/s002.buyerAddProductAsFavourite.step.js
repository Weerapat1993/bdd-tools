// @F036U001S002
import { defineSupportCode } from 'cucumber'
import { combineDriver } from '../../../../config'

/**
 * Scenario: @F036U001S002
 * Given a member (who is signed in) is on "Shopping Cart" page
 * Given that cart is not empty and a member select product (that is not added to their favourites)
 * When a member clicks "Move to My Favourites"
 * Then System add that product into their Favourites
 * Then System display confirm message "Are you sure you would like to move item to My favourite?"
 * Then System add that product into their Favourites after confirm
 * Then System display message "Item has been moved to My favourite"
 * Then System change the star icon with filled color
 * Then System remove product from Cart
 */
defineSupportCode(({ Given, When, Then }) => {

  Given(/^a member \(who is signed in\) is on "Shopping Cart" page$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Given(/^that cart is not empty and a member select product \(that is not added to their favourites\)$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  When(/^a member clicks "Move to My Favourites"$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Then(/^System add that product into their Favourites$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Then(/^System display confirm message "Are you sure you would like to move item to My favourite?"$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Then(/^System add that product into their Favourites after confirm$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Then(/^System display message "Item has been moved to My favourite"$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Then(/^System change the star icon with filled color$/, async () => {
    await combineDriver([
      // Function
    ])
  })

  Then(/^System remove product from Cart$/, async () => {
    await combineDriver([
      // Function
    ])
  })

})
