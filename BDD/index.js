const { Given, When, Then, CreateBDD } = require('./utils/scenario')

// U001 --------------------------
CreateBDD({
  feature: {
    fid: 'F036',
    name: 'Favourite Product (Wish lists)',
  },
  user: {
    uid: 'U001',
    story: {
      title: 'Buyer add product as favourite',
      as: 'member',
      want_to: 'add interested product in to my favourite list.',
      so_that: 'I can watch my interested product for future.',
    },
  },
  scenarios: [
    {
      sid: 'F036U001S001',
      scenario: 'Member add their favourite product from product detail page',
      outline: false,
      stories: [
        Given('a member (who is signed in) is on "Product Detail" page and that product is not added to their favourites'),
        Given('a member click "Star" icon (un-filled color star)'),
        When('System add that product into their Favourites'),
        Then('and system display message "Added to My favourite"'),
        Then('and system change the star icon with filled color'),
      ]
    },
    {
      sid: 'F036U001S002',
      scenario: 'Member add their favourite product from Shopping cart',
      outline: false,
      stories: [
        Given('a member (who is signed in) is on "Shopping Cart" page and that cart is not empty and a member select product (that is not added to their favourites)'),
        Given('a member clicks "Move to My Favourites"'),
        Given('System add that product into their Favourites'),
        When('and system display confirm message "Are you sure you would like to move item to My favourite?"'),
        Then('and system add that product into their Favourites after confirm'),
        Then('and system display message "Item has been moved to My favourite"'),
        Then('and system change the star icon with filled color'),
        Then('and System remove product from Cart')
      ]
    }
  ]
})

// U002 --------------------------
CreateBDD({
  feature: {
    fid: 'F036',
    name: 'Favourite Product (Wish lists)',
  },
  user: {
    uid: 'U002',
    story: {
      title: 'Buyer manage favourite Product',
      as: 'member',
      want_to: 'manage product in my favourite list.',
      so_that: 'I can view or remove product in favouritelist.',
    },
  },
  scenarios: [
    {
      sid: 'F036U002S001',
      scenario: 'Member see their empty favourites',
      outline: false,
      stories: [
        Given('a member (who is signed in) is on "Personal Menu" and their favourites is empty'),
        Given('a member tap "My Favourite" menu'),
        When('System navigate to My Favourite page'),
        Then('and system validate their Favourites is empty'),
        Then('and system display guideline how to add product into My Favourite'),
        Then('and system display button "Go shopping" that link to "MARKET" page'),
      ]
    },
    {
      sid: 'F036U002S002',
      scenario: 'Member view their added favourite products',
      outline: false,
      stories: [
        Given('a member (who is signed in) is on "Personal Menu" and their favourites is NOT empty'),
        Given('a member tap "My Favourite" menu'),
        When('1. System navigate to My Favourite page'),
      ]
    }
  ]
})





