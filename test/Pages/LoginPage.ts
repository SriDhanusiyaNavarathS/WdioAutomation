class LoginPage {

    async navigateToLoginPage() {
        await (await $(`//*[@class="login"]`)).click();
    }
    async usersignIn(emailId, password) {
        let EmailId = await $('//*[@id="email"]')
        EmailId.setValue(emailId)
        // Application need static wait
        await browser.pause(10000)
        let Password = await $('//*[@id="passwd"]')
        Password.setValue(password)
        // Application need static wait
        await browser.pause(10000)
        let SignInButton = await $(`//*[@id="SubmitLogin"]`)
        SignInButton.click();
        // Application need static wait
        await browser.pause(10000)
    }
    async createEmailAndNavigate(newEmail){
        let NewEmail= await $(`//*[@id="email_create"]`)
        NewEmail.setValue(newEmail)
        await browser.pause(10000)
        let button = await $(`//*[@id="SubmitCreate"]`)
        button.click()
    }
    async errorMessage(){
        let errorMessage = await (await $(`//*[@id="create_account_error"]`)).getText()
        console.log("ErrorMessage is: " + errorMessage)
        return errorMessage;
    }


}
const Loginpage = new LoginPage()
export { Loginpage }