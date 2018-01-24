import { defineSupportCode } from 'cucumber'
import { expect } from 'chai'
import { clickLoginWithEmailButton } from './functions'

defineSupportCode(({ Given, When, Then }) => {

  Given(/^Given a member (who is signed in) is on "Personal Menu" and their favourites is empty$/, async () => {
    // await
  })

  Given(/^Given a member tap "My Favourite" menu$/, async () => {
    // await
  })

  When(/^When System navigate to My Favourite page$/, async () => {
    // await
  })

  Then(/^Then and system validate their Favourites is empty$/, async () => {
    // await
  })

  Then(/^Then and system display guideline how to add product into My Favourite$/, async () => {
    // await
  })

  Then(/^Then and system display button "Go shopping" that link to "MARKET" page$/, async () => {
    // await
  })

})
