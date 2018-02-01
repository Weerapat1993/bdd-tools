// @F036U001S002
import { defineSupportCode } from 'cucumber'
import { expect } from 'chai'
import { combineDriver, describe } from '../../../../config'

defineSupportCode(({ Given, When, Then }) => {

  Given(/^a member \(who is signed in\) is on "Shopping Cart" page$/, async () => {
    describe.Given('a member (who is signed in) is on "Shopping Cart" page')
    await combineDriver([
      // Function
    ])
  })

  Given(/^that cart is not empty and a member select product \(that is not added to their favourites\)$/, async () => {
    describe.Given('that cart is not empty and a member select product (that is not added to their favourites)')
    await combineDriver([
      // Function
    ])
  })

  When(/^a member clicks "Move to My Favourites"$/, async () => {
    describe.When('a member clicks "Move to My Favourites"')
    await combineDriver([
      // Function
    ])
  })

  Then(/^System add that product into their Favourites$/, async () => {
    describe.Then('System add that product into their Favourites')
    await combineDriver([
      // Function
    ])
  })

  Then(/^System display confirm message "Are you sure you would like to move item to My favourite?"$/, async () => {
    describe.Then('System display confirm message "Are you sure you would like to move item to My favourite?"')
    await combineDriver([
      // Function
    ])
  })

  Then(/^System add that product into their Favourites after confirm$/, async () => {
    describe.Then('System add that product into their Favourites after confirm')
    await combineDriver([
      // Function
    ])
  })

  Then(/^System display message "Item has been moved to My favourite"$/, async () => {
    describe.Then('System display message "Item has been moved to My favourite"')
    await combineDriver([
      // Function
    ])
  })

  Then(/^System change the star icon with filled color$/, async () => {
    describe.Then('System change the star icon with filled color')
    await combineDriver([
      // Function
    ])
  })

  Then(/^System remove product from Cart$/, async () => {
    describe.Then('System remove product from Cart')
    await combineDriver([
      // Function
    ])
  })

})
