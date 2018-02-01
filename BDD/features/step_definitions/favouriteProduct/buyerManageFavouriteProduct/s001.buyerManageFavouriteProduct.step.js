// @F036U002S001
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

  Given(/^their favourites is empty$/, async () => {
    describe.Given('their favourites is empty')
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

  Then(/^System validate their Favourites is empty$/, async () => {
    describe.Then('System validate their Favourites is empty')
    await combineDriver([
      // Function
    ])
  })

  Then(/^System display guideline how to add product into My Favourite$/, async () => {
    describe.Then('System display guideline how to add product into My Favourite')
    await combineDriver([
      // Function
    ])
  })

  Then(/^System display button "Go shopping" that link to "MARKET" page$/, async () => {
    describe.Then('System display button "Go shopping" that link to "MARKET" page')
    await combineDriver([
      // Function
    ])
  })

})
