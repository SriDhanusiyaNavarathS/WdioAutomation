import { Given, Then, When } from "@wdio/cucumber-framework";
import data from "../data/testdata";
import { Loginpage } from "../Pages/LoginPage";
import { Registerpage } from "../Pages/RegisterationPage";

When(/^User provides email id and clicks on create an account option$/, async function () {
    await Loginpage.createEmailAndNavigate(data.RegisterDetails.emailId);
    // await browser.pause(10000)
})

Then(/^User enters all required details on Your Personal Information screen and clicks on register$/, async function () {
    await Registerpage.userPersonInformation(data.RegisterDetails.firstname, data.RegisterDetails.lastname, data.RegisterDetails.password);
    await Registerpage.userAddressInformation(data.RegisterDetails.company, data.RegisterDetails.address, data.RegisterDetails.addressLine2, data.RegisterDetails.city, data.RegisterDetails.postalCode, data.RegisterDetails.additionalInfo, data.RegisterDetails.homePhone, data.RegisterDetails.mobilePhone, data.RegisterDetails.addressalias)
    await Registerpage.submitRegisterButton()
    // await browser.pause(10000)
});


