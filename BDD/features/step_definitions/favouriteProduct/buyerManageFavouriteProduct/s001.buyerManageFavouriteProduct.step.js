// @F036U002S001
import { defineSupportCode } from 'cucumber'
import { expect } from 'chai'
import { combineDriver } from '../../../../config'

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
