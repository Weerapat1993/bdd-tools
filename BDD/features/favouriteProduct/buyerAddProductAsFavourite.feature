@F036

Feature: (U001) Buyer add product as favourite

"""
  As member
  I want to add interested product in to my favourite list.
  So that I can watch my interested product for future.
"""

  @F036U001S001
  Scenario: (S001) Member add their favourite product from product detail page
    Given a member (who is signed in) is on "Product Detail" page and that product is not added to their favourites
    Given a member click "Star" icon (un-filled color star)
    When System add that product into their Favourites
    Then and system display message "Added to My favourite"
    Then and system change the star icon with filled color

  @F036U001S002
  Scenario: (S002) Member add their favourite product from Shopping cart
    Given a member (who is signed in) is on "Shopping Cart" page and that cart is not empty and a member select product (that is not added to their favourites)
    Given a member clicks "Move to My Favourites"
    Given System add that product into their Favourites
    When and system display confirm message "Are you sure you would like to move item to My favourite?"
    Then and system add that product into their Favourites after confirm
    Then and system display message "Item has been moved to My favourite"
    Then and system change the star icon with filled color
    Then and System remove product from Cart


