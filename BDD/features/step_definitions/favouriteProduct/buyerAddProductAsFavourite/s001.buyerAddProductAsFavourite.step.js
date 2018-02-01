// @F036U001S001
import { defineSupportCode } from 'cucumber'
import { expect } from 'chai'
import { combineDriver, describe } from '../../../../config'

defineSupportCode(({ Given, When, Then }) => {

  Given(/^a member \(who is signed in\) is on "Product Detail" page$/, async () => {
    describe.Given('a member (who is signed in) is on "Product Detail" page')
    await combineDriver([
      // Function
    ])
  })

  Given(/^that product is not added to their favourites$/, async () => {
    describe.Given('that product is not added to their favourites')
    await combineDriver([
      // Function
    ])
  })

  When(/^a member click "Star" icon \(un-filled color star\)$/, async () => {
    describe.When('a member click "Star" icon (un-filled color star)')
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

  Then(/^System display message "Added to My favourite"$/, async () => {
    describe.Then('System display message "Added to My favourite"')
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

})
