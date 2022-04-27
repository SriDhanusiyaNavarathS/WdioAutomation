@Regsiter
Feature: Register on the website

    Scenario: Verify if new user is able to register on the website
        Given User is on homepage
        And User clicks on signIn option and navigate to authentication screen
        When User provides email id and clicks on create an account option
        Then User enters all required details on Your Personal Information screen and clicks on register

    

