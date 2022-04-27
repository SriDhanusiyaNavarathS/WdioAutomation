class Register {

    async userPersonInformation(firstname, lastname, password) {
        //Select Gender
        let checkbox = await $(`//*[@id="id_gender1"]`);
        checkbox.click();

        //Enter FirstName
        let FirstName = await $(`//*[@id="customer_firstname"]`);
        FirstName.setValue(firstname)

        //enter Lastname
        let LastName = await $(`//*[@id="customer_lastname"]`)
        LastName.setValue(lastname)

        //Enter Password
        let Password = await $(`//*[@id="passwd"]`)
        Password.setValue(password)

        //Select DOB
        let SelectDays = await $(`//*[@id="days"]`);
        await SelectDays.selectByIndex(5)
        let SelectMonths = await $(`//*[@id="months"]`);
        await SelectMonths.selectByIndex(3)
        let SelectYear = await $(`//*[@id="years"]`);
        await SelectYear.selectByIndex(23)
        await browser.pause(10000)
    }
    async userAddressInformation(company, address, addressLine2, city, postalcode, AddInfo, Homephone, mobileNo, aliasAddress) {
        let Company = await $(`//*[@id="company"]`)
        Company.setValue(company)

        let Address = await $(`//*[@id="address1"]`)
        Address.setValue(address)

        let AddressLine2 = await $(`//*[@id="address2"]`)
        AddressLine2.setValue(addressLine2)

        let City = await $(`//*[@id="city"]`)
        City.setValue(city)

        let State = await $(`//*[@id="id_state"]`)
        State.selectByIndex(7)

        let PostalCode = await $(`//*[@id="postcode"]`)
        PostalCode.setValue(postalcode)

        let Country = await $(`//*[@id="id_country"]`)
        Country.selectByIndex(1)

        let Additionalinformation = await $(`//*[@id="other"]`)
        Additionalinformation.setValue(AddInfo)

        let HomePhone = await $(`//*[@id="phone"]`)
        HomePhone.setValue(Homephone)

        let MobileNo = await $(`//*[@id="phone_mobile"]`)
        MobileNo.setValue(mobileNo)

        let AliasAddress = await $(`//*[@id="alias"]`)
        AliasAddress.setValue(aliasAddress)

        await browser.pause(10000)
    }
    async submitRegisterButton() {
        let RegisterButton = await $(`//*[@id="submitAccount"]`)
        RegisterButton.click();
    }
    
}
const Registerpage = new Register()
export { Registerpage }