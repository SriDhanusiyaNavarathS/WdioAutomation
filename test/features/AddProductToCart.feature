@AddProduct
Feature:  Add a product to the cart

    Background: LoginIn
        Given User is on homepage
        And User clicks on signIn option and navigate to authentication screen
        And User provides valid mailid and password

    Scenario: Verify if new user is able to add a product to cart
          Given User validates whether correct name and surname is displayed on the landing screen
          When User navigates and selects a product
          Then User adds a product to cart

    Scenario: Verify user is able to checkout product and continues till payment
        Given User navigates and selects a product
        When User adds a product to cart
        Then User proceed to checkout the product and continues till payment

    Scenario: User validate whether the product details present on the payment page are correct
         Given User navigates and selects a product
         When User adds a product to cart
         Then User validates delivery address present on summary page is correct
         Then User verifies product details




