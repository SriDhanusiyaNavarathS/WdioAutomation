class LoginPage {

    async navigateToLoginPage() {
        await (await $(`//*[@id="header"]/div[2]/div/div/nav/div[1]/a`)).click();
    }
    async usersignIn(emailId, password) {
        let EmailId = await $('//*[@id="email"]')
        EmailId.setValue(emailId)

        await (await $('//*[@id="passwd"]')).waitForDisplayed()
        let Password = await $('//*[@id="passwd"]')
        Password.setValue(password)

        await (await $(`//*[@id="SubmitLogin"]`)).waitForDisplayed()
        let SignInButton = await (await $(`//*[@id="SubmitLogin"]`))
        SignInButton.click();

    }
    async createEmailAndNavigate(newEmail) {
        
        let NewEmail = await $(`//*[@id="email_create"]`)
        NewEmail.setValue(newEmail)

        await (await $(`//*[@id="SubmitCreate"]`)).waitForClickable();
        let button = await $(`//*[@id="SubmitCreate"]`)
        button.click()
    }
    async errorMessage() {
        let errorMessage = await (await $(`//*[@id="create_account_error"]`)).getText()
        console.log("ErrorMessage is: " + errorMessage)
        return errorMessage;
    }
    async getUsername() {
        await (await $(`//*[@id="header"]/div[2]/div/div/nav/div[1]/a/span`)).waitForDisplayed();
        const username = await (await $(`//*[@id="header"]/div[2]/div/div/nav/div[1]/a/span`)).getText();
        return username;
    }
    async Logout(){
        await (await $(`//*[@id="header"]/div[2]/div/div/nav/div[2]/a`)).waitForDisplayed();
        await (await $(`//*[@id="header"]/div[2]/div/div/nav/div[2]/a`)).click();
    }


}
const Loginpage = new LoginPage()
export { Loginpage }