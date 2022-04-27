@login
Feature: SignIn on the landing page

    Scenario: User signIn into existing account
        Given User is on homepage
        And User clicks on signIn option and navigate to authentication screen
        When User provides valid mailid and password
        Then User validates whether correct name and surname is displayed on the landing screen

