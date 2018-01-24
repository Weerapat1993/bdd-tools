import { defineSupportCode } from 'cucumber'
import { expect } from 'chai'
import { clickLoginWithEmailButton } from './functions'

defineSupportCode(({ Given, When, Then }) => {

  Given(/^Given a member (who is signed in) is on "Product Detail" page and that product is not added to their favourites$/, async () => {
    // await
  })

  Given(/^Given a member click "Star" icon (un-filled color star)$/, async () => {
    // await
  })

  When(/^When System add that product into their Favourites$/, async () => {
    // await
  })

  Then(/^Then and system display message "Added to My favourite"$/, async () => {
    // await
  })

  Then(/^Then and system change the star icon with filled color$/, async () => {
    // await
  })

})
