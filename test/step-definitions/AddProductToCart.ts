import { Given, Then, When } from "@wdio/cucumber-framework";
import data from "../data/testdata";
import { Loginpage } from "../Pages/LoginPage";
import { Productpage } from "../Pages/ProductPage";

When(/^User navigates and selects a product$/, async function () {
    await Productpage.navigateAndSelectProduct();
});
Then(/^User adds a product to cart$/, async function () {
    const title = await browser.getTitle();
    expect(title).toBe("Printed Dress - My Store")
    await Productpage.addProductCart();
   
});
Given(/^User proceed to checkout the product and continues till payment$/, async function () {
    await Productpage.checkOut()
    await Productpage.proceedToPayment();
});

Then(/^User validates delivery address present on summary page is correct$/, async function () {

    await Productpage.getProductDetails();
    await Productpage.getsizecolor();
    await Productpage.checkOut()
    const Details = await Productpage.deliveryDetails();

    expect(Details.getUsername).toBe(data.LoginDetails.Username)
    expect(Details.getCompanyName).toBe(data.RegisterDetails.company)
    expect(Details.Address).toBe(data.RegisterDetails.address + " " + data.RegisterDetails.addressLine2)
    expect(Details.HomePhone).toBe(data.RegisterDetails.homePhone)
    expect(Details.MobilePhone).toBe(data.RegisterDetails.mobilePhone)

})
Then(/^User verifies product details$/, async function () {
    await Productpage.proceedToPayment();
    const TotalPrice = await Productpage.totalPrice();
    expect(TotalPrice).toBe(data.GetData.Price[0])
    expect(await Productpage.QuantityOnCart()).toBe(data.GetData.Quantity[0])
    let GetColoSIze = await Productpage.ColorSizeOnCart()
    expect(GetColoSIze.color).toBe("Color" + " " + ":" + " " + data.GetData.Color[0])
    expect(GetColoSIze.size).toBe(" Size" + " " + ":" + "" + data.GetData.Size[0])

})