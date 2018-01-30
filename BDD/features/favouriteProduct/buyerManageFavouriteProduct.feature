@F036
Feature: (U002) Buyer manage favourite Product
  As member
  I want to manage product in my favourite list.
  So that I can view or remove product in favouritelist.

  @F036U002S001
  Scenario: (S001) Member see their empty favourites
    Given a member (who is signed in) is on "Personal Menu"
    Given their favourites is empty
    When a member tap "My Favourite" menu
    Then System navigate to My Favourite page
    Then System validate their Favourites is empty
    Then System display guideline how to add product into My Favourite
    Then System display button "Go shopping" that link to "MARKET" page
  @F036U002S002
  Scenario: (S002) Member view their added favourite products
    Given a member (who is signed in) is on "Personal Menu"
    Given their favourites is NOT empty
    When a member tap "My Favourite" menu
    Then System navigate to My Favourite page
    Then System display list of favourite product that is <data>

