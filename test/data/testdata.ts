import RegisterationPage from "../model/registeration";

const data = {
    ApplicationData: {
        APP_URL: "http://automationpractice.com/index.php",
        APP_title: "My Store",
    },
    LoginDetails: {
        EmailId: "Divya1@gmail.com",
        Password: "abcd@123",
        Username: "Divya M"
    },
    RegisterDetails: new RegisterationPage(
        "Divya2@gmail.com",
        "Divya",
        "SM", 
        "abcd@123",
        "company",
        "Ram Apartment",
        "New Tank Street",
        "city",
        "00000",
        "Addtional info",
        "12345120120",
        "231569789",
        "Near PFB station"),
GetData:{
    Price: [],
    Size: [],
    Color: [],
    Quantity: []
}
  

}
export default data;