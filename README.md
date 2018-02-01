# BDD Tools (Alpha)

### How to Install Appium
- Download appium v.1.2.7 [download](https://github.com/appium/appium-desktop/releases/tag/v1.2.7)
- Install appium global ``` npm install -g appium```
- Install appium doctor for check appium dependency required ``` npm install appium-doctor -g```
- Install Carthage with Home brew ``` brew install carthage ```

### How to Install BDD Tools
```sh
git clone https://github.com/Weerapat1993/bdd-tools.git
cd bbd-tools
npm install -g
```

### How to run inspector
- Open appium desktop
- Start server appium **make sure host server on appium desktop is match config server in file BDD/config/appium/server.js**
- After start server find button **Start Inspector Session** and then click it, your will see new window display.
- Open the project your want to test BDD 
- On TextArea under menu JSON Representation, parse config like this for start session
- Run Command
```sh
bdd conifg
```
> **Note.** from config key "app" please check path of app match you machine again.

### How to Create BDD File

Please create file `bdd.config.json` in your project.

### Example `exmaple.feature`
```feature
@F036
Feature: (U001) Buyer add product as favourite
  As member
  I want to add interested product in to my favourite list.
  So that I can watch my interested product for future.

  @F036U001S001
  Scenario: (S001) Member add their favourite product from product detail page
    Given a member (who is signed in) is on "Product Detail" page
    Given that product is not added to their favourites
    When a member click "Star" icon (un-filled color star)
    Then System add that product into their Favourites
    Then System display message "Added to My favourite"
    Then System change the star icon with filled color
  @F036U001S002
  Scenario: (S002) Member add their favourite product from Shopping cart
    Given a member (who is signed in) is on "Shopping Cart" page
    Given that cart is not empty and a member select product (that is not added to their favourites)
    When a member clicks "Move to My Favourites"
    Then System add that product into their Favourites
    Then System display confirm message "Are you sure you would like to move item to My favourite?"
    Then System add that product into their Favourites after confirm
    Then System display message "Item has been moved to My favourite"
    Then System change the star icon with filled color
    Then System remove product from Cart
```

### Example `bdd.config.json`
```json
{
  "BDD": [
    {
      "feature": {
        "fid": "F036",
        "name": "Favourite Product (Wish lists)"
      },
      "user": {
        "uid": "U001",
        "story": {
          "title": "Buyer add product as favourite",
          "as": "member",
          "want_to": "add interested product in to my favourite list.",
          "so_that": "I can watch my interested product for future."
        }
      },
      "scenarios": [
        {
          "sid": "F036U001S001",
          "scenario": "Member add their favourite product from product detail page",
          "outline": false,
          "stories": [
            "Given a member (who is signed in) is on \"Product Detail\" page",
            "Given that product is not added to their favourites",
            "When a member click \"Star\" icon (un-filled color star)",
            "Then System add that product into their Favourites",
            "Then System display message \"Added to My favourite\"",
            "Then System change the star icon with filled color"
          ]
        },
        {
          "sid": "F036U001S002",
          "scenario": "Member add their favourite product from Shopping cart",
          "outline": false,
          "stories": [
            "Given a member (who is signed in) is on \"Shopping Cart\" page",
            "Given that cart is not empty and a member select product (that is not added to their favourites)",
            "When a member clicks \"Move to My Favourites\"",
            "Then System add that product into their Favourites",
            "Then System display confirm message \"Are you sure you would like to move item to My favourite?\"",
            "Then System add that product into their Favourites after confirm",
            "Then System display message \"Item has been moved to My favourite\"",
            "Then System change the star icon with filled color",
            "Then System remove product from Cart"
          ]
        }
      ]
    },
    {
      "feature": {
        "fid": "F036",
        "name": "Favourite Product (Wish lists)"
      },
      "user": {
        "uid": "U002",
        "story": {
          "title": "Buyer manage favourite Product",
          "as": "member",
          "want_to": "manage product in my favourite list.",
          "so_that": "I can view or remove product in favouritelist."
        }
      },
      "scenarios": [
        {
          "sid": "F036U002S001",
          "scenario": "Member see their empty favourites",
          "outline": false,
          "stories": [
            "Given a member (who is signed in) is on \"Personal Menu\"",
            "Given their favourites is empty",
            "When a member tap \"My Favourite\" menu",
            "Then System navigate to My Favourite page",
            "Then System validate their Favourites is empty",
            "Then System display guideline how to add product into My Favourite",
            "Then System display button \"Go shopping\" that link to \"MARKET\" page"
          ]
        },
        {
          "sid": "F036U002S002",
          "scenario": "Member view their added favourite products",
          "outline": false,
          "stories": [
            "Given a member (who is signed in) is on \"Personal Menu\"",
            "Given their favourites is NOT empty",
            "When a member tap \"My Favourite\" menu",
            "Then System navigate to My Favourite page",
            "Then System display list of favourite product that is <data>"
          ]
        }
      ]
    }
  ]
}
```

### And Run Command
```sh
bdd create
```

### How to Check All testID (Incomplete)

find `testID` or `accessibilityLabel` in this project.
in folder `./src/constants/automationID`

```sh
bdd testID
```
