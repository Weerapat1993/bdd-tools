import { defineSupportCode } from 'cucumber'
import { expect } from 'chai'
import { clickLoginWithEmailButton } from './functions'

defineSupportCode(({ Given, When, Then }) => {

  Given(/^Given a member (who is signed in) is on "Shopping Cart" page and that cart is not empty and a member select product (that is not added to their favourites)$/, async () => {
    // await
  })

  Given(/^Given a member clicks "Move to My Favourites"$/, async () => {
    // await
  })

  Given(/^Given System add that product into their Favourites$/, async () => {
    // await
  })

  When(/^When and system display confirm message "Are you sure you would like to move item to My favourite?"$/, async () => {
    // await
  })

  Then(/^Then and system add that product into their Favourites after confirm$/, async () => {
    // await
  })

  Then(/^Then and system display message "Item has been moved to My favourite"$/, async () => {
    // await
  })

  Then(/^Then and system change the star icon with filled color$/, async () => {
    // await
  })

  Then(/^Then and System remove product from Cart$/, async () => {
    // await
  })

})
