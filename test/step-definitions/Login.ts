import { Given, Then, When } from "@wdio/cucumber-framework";
import data from "../data/testdata";
import {Loginpage} from "../Pages/LoginPage"

Given(/^User is on homepage$/, async function () {
    await browser.url(data.ApplicationData.APP_URL);
    await browser.maximizeWindow();
    await browser.pause(1000);
    const ApplicationTitle = await browser.getTitle();
    expect(ApplicationTitle).toBe(data.ApplicationData.APP_title)
});
Given(/^User clicks on signIn option and navigate to authentication screen$/, async function () {
    await Loginpage.navigateToLoginPage();
    await browser.pause(1000);
});
When(/^User provides valid mailid and password$/, async function () {
    await Loginpage.usersignIn(data.LoginDetails.EmailId, data.LoginDetails.Password)
    
});
Then(/^User validate whether correct name and surname is displayed on the landing screen$/, async function (){
    const username = await (await $(`//*[@id="header"]/div[2]/div/div/nav/div[1]`)).getText();
    expect(username).toBe(data.LoginDetails.Username);
});