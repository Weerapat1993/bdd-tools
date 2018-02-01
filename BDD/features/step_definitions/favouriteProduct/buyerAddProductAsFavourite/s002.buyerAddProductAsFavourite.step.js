// @F036U001S002
import { defineSupportCode } from 'cucumber'
import { expect } from 'chai'
import { combineDriver, describe } from '../../../../config'

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
 
  const STEP_1 = 'a member (who is signed in) is on "Shopping Cart" page'
  Given(/^a member \(who is signed in\) is on "Shopping Cart" page$/, async () => {
    describe.Given(STEP_1)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_2 = 'that cart is not empty and a member select product (that is not added to their favourites)'
  Given(/^that cart is not empty and a member select product \(that is not added to their favourites\)$/, async () => {
    describe.Given(STEP_2)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_3 = 'a member clicks "Move to My Favourites"'
  When(/^a member clicks "Move to My Favourites"$/, async () => {
    describe.When(STEP_3)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_4 = 'System add that product into their Favourites'
  Then(/^System add that product into their Favourites$/, async () => {
    describe.Then(STEP_4)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_5 = 'System display confirm message "Are you sure you would like to move item to My favourite?"'
  Then(/^System display confirm message "Are you sure you would like to move item to My favourite?"$/, async () => {
    describe.Then(STEP_5)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_6 = 'System add that product into their Favourites after confirm'
  Then(/^System add that product into their Favourites after confirm$/, async () => {
    describe.Then(STEP_6)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_7 = 'System display message "Item has been moved to My favourite"'
  Then(/^System display message "Item has been moved to My favourite"$/, async () => {
    describe.Then(STEP_7)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_8 = 'System change the star icon with filled color'
  Then(/^System change the star icon with filled color$/, async () => {
    describe.Then(STEP_8)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_9 = 'System remove product from Cart'
  Then(/^System remove product from Cart$/, async () => {
    describe.Then(STEP_9)
    await combineDriver([
      // Function
    ])
  })

})
