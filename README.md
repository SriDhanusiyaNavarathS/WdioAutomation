# WdioAutomation for shopping application
**Cucumber framework with Typescript as a language**

*Pre-requisite*
--Node.js and npm
--Visual studio code

*Set-up*
--npm init wdio .
--npm install require dependencies
--npm install chromedriver
--node modules->contains all nodes packages

*Files*
--Feature file--> Contains features broken down into scenarios in gherkin language
#Login feature 
User logins into existing registered account
#Register feature
New user registers into application
#AddProduct into Cart
User adds product to cart and proceed checkout till payment

--Step-Definitions-->Features are mapped into step file and data are called int step file.
#step file includes function called from pages files.

--Page Object Files-->Pages contains functions and methods of login, register and product page
#browser actions functions/methods written are called in page files

--Model File-->contains parameters/model of that page
#models are assigned with data types

--Testdate File-->contains sample test data 
#Data's are declared and data received from UI are pushed to test data
#data's are called in step file only.

**Report**
Allure reporting

**Execution**
Command: *npm run wdio

