// @F036U001S001
import { defineSupportCode } from 'cucumber'
import { expect } from 'chai'
import { combineDriver, describe } from '../../../../config'

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
 
  const STEP_1 = 'a member (who is signed in) is on "Product Detail" page'
  Given(/^a member \(who is signed in\) is on "Product Detail" page$/, async () => {
    describe.Given(STEP_1)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_2 = 'that product is not added to their favourites'
  Given(/^that product is not added to their favourites$/, async () => {
    describe.Given(STEP_2)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_3 = 'a member click "Star" icon (un-filled color star)'
  When(/^a member click "Star" icon \(un-filled color star\)$/, async () => {
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
 
  const STEP_5 = 'System display message "Added to My favourite"'
  Then(/^System display message "Added to My favourite"$/, async () => {
    describe.Then(STEP_5)
    await combineDriver([
      // Function
    ])
  })
 
  const STEP_6 = 'System change the star icon with filled color'
  Then(/^System change the star icon with filled color$/, async () => {
    describe.Then(STEP_6)
    await combineDriver([
      // Function
    ])
  })

})
