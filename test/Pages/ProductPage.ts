import data from "../data/testdata";

class ProductPage {
    async navigateAndSelectProduct() {

        let Dresses = await $(`//*[@id="block_top_menu"]/ul/li[2]`)
        Dresses.waitForClickable()
        Dresses.click();

        let PrintedDress = await $(`//*[@id="categories_block_left"]/div/ul/li[2]/a`)
        PrintedDress.waitForClickable()
        await PrintedDress.click();

        const SelectProduct = await $('//*[@id="center_column"]/ul/li/div/div[2]/h5/a');
        await SelectProduct.scrollIntoView()
        await SelectProduct.click();
        //await browser.pause(1000)
    }
    async proceedToPayment() {
        let navigateToPayment = await $(`//*[@id="center_column"]/p[2]/a[1]`)
        navigateToPayment.waitForClickable()
        navigateToPayment.click();

        let navigateNextToPayment = await $(`//*[@id="center_column"]/form/p/button`)
        navigateNextToPayment.waitForClickable()
        navigateNextToPayment.click();


        let selectTermsOfService = await $(`/html/body/div/div[2]/div/div[3]/div/div/form/div/p[2]/div/span/input`)
        selectTermsOfService.waitForClickable()
        selectTermsOfService.click();

        let proceedPayment = await $('//*[@id="form"]/p/button')
        proceedPayment.waitForClickable()
        proceedPayment.click();
    }

    async addProductCart() {
        const size = await $('//*[@id="group_1"]');
        size.selectByAttribute('value', '2')

        const color = await $(`//*[@name="Pink"]`);
        color.waitForClickable()
        await color.click();

        const addCart = await $(`//*[@id="add_to_cart"]/button`)

        await addCart.click();

    }

    async getProductDetails() {
        await (await $(`//*[@id="layer_cart"]/div[1]/div[2]/div[3]/span`)).waitForDisplayed()
        let getPrice = await (await $(`//*[@id="layer_cart"]/div[1]/div[2]/div[3]/span`)).getText()
        data.GetData.Price.push(getPrice)

        let quantity = await (await (await $(`//*[@id="layer_cart_product_quantity"]`)).getText()).trim();
        data.GetData.Quantity.push(quantity)

        console.log(`${getPrice}.....${quantity}`)

        return { getPrice, quantity }

    }
    async getsizecolor() {
        let getColorSize = await (await (await $(`//*[@id="layer_cart_product_attributes"]`)).getText()).split(',');
        data.GetData.Size.push(getColorSize[1])
        data.GetData.Color.push(getColorSize[0])
        let color = getColorSize[0];
        let size = getColorSize[1]
        return { color, size }

    }
    async checkOut() {

        await browser.waitUntil(
            async () => await $(`//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a`).isClickable(),
            {
                timeout: 50000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        );
        await $(`//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a`).click();
    }
    async deliveryDetails() {

        const getUsername = await (await $(`//*[@id="center_column"]/div[3]/div[1]/ul/li[2]/span`)).getText();

        const getCompanyName = await (await $(`//*[@id="center_column"]/div[3]/div[1]/ul/li[3]/span`)).getText();

        const Address = await (await $(`//*[@id="center_column"]/div[3]/div[1]/ul/li[4]/span`)).getText();

        const City = await (await $(`//*[@id="center_column"]/div[3]/div[1]/ul/li[5]/span`)).getText();

        const country = await (await $(`//*[@id="center_column"]/div[3]/div[1]/ul/li[6]/span`)).getText();

        const HomePhone = await (await $(`//*[@id="center_column"]/div[3]/div[1]/ul/li[7]/span`)).getText();

        const MobilePhone = await (await $(`//*[@id="center_column"]/div[3]/div[1]/ul/li[8]/span`)).getText();
        console.log(`${getUsername}...${getCompanyName}...${Address}...${City}...${country}...${HomePhone}...${MobilePhone}`)
        return { getUsername, getCompanyName, Address, City, country, HomePhone, MobilePhone }
    }
    async ColorSizeOnCart() {
        let colorsize = await (await (await $(`//*[@id="product_4_44_0_680442"]/td[2]/small[2]/a`)).getText()).split(',');
        console.log("colorsize " + colorsize[0])
        console.log("colorsize " + colorsize[1])
        let color = colorsize[0]
        let size = colorsize[1]
        return { color, size }
    }
    async QuantityOnCart() {
        let Quantity = await (await $(`//*[@id="product_4_44_0_680442"]/td[5]/span`)).getText();
        console.log("Quantity" + Quantity)
        return Quantity
    }
    async totalPrice() {
        let totalPrice = await (await $(`//*[@id="total_price"]`)).getText();
        console.log("totalPrice" + totalPrice)
        return totalPrice;
    }
}
const Productpage = new ProductPage()
export { Productpage }