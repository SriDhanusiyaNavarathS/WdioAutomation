import data from "../data/testdata";

class ProductPage {
    async navidateAndSelectProduct() {
        let Dresses = await $(`//*[@id="block_top_menu"]/ul/li[2]`)
        Dresses.click();

        let PrintedDress = await $(`//*[@id="categories_block_left"]/div/ul/li[2]/a`)
        await PrintedDress.click();

        const SelectProduct = await $('//*[@id="center_column"]/ul/li/div/div[2]/h5/a');
        await SelectProduct.scrollIntoView()
        await SelectProduct.click();
        await browser.pause(1000)
    }
    async proceedToPayment() {
        let navigateToPayment = await $(`//*[@id="center_column"]/p[2]/a[1]`)
        navigateToPayment.click();

        let navigateNextToPayment = await $(`//*[@id="center_column"]/form/p/button`)
        navigateNextToPayment.click();
        await browser.pause(1000)

        let selectTermsOfService = await $(`/html/body/div/div[2]/div/div[3]/div/div/form/div/p[2]/div/span/input`)
        selectTermsOfService.click();
        await browser.pause(10000)

        let proceedPayment = await $('//*[@id="form"]/p/button')
        proceedPayment.click();
        await browser.pause(1000)
    }

    async addProductCart() {
        const size = await $('//*[@id="group_1"]');
        size.selectByAttribute('value', '2')

        const color = await $(`//*[@name="Pink"]`);
        await color.click();

        const addCart = await $(`//*[@id="add_to_cart"]/button`)
        await addCart.click();
        await browser.pause(1000)
    }

    async getProductDetails() {
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
        let checkout = await $(`//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a`)
        checkout.click();
        await browser.pause(1000)
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