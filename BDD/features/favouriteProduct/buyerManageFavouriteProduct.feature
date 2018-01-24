@F036

Feature: (U002) Buyer manage favourite Product

"""
  As member
  I want to manage product in my favourite list.
  So that I can view or remove product in favouritelist.
"""

  @F036U002S001
  Scenario: (S001) Member see their empty favourites
    Given a member (who is signed in) is on "Personal Menu" and their favourites is empty
    Given a member tap "My Favourite" menu
    When System navigate to My Favourite page
    Then and system validate their Favourites is empty
    Then and system display guideline how to add product into My Favourite
    Then and system display button "Go shopping" that link to "MARKET" page

  @F036U002S002
  Scenario: (S002) Member view their added favourite products
    Given a member (who is signed in) is on "Personal Menu" and their favourites is NOT empty
    Given a member tap "My Favourite" menu
    When 1. System navigate to My Favourite page


