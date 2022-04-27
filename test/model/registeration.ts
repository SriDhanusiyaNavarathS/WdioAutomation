export default class RegisterationPage {

    emailId: string;
    firstname: string;
    lastname: string;
    password: string;
    company: string;
    address: string;
    addressLine2: string;
    city: string;
    postalCode: string;
    additionalInfo: string;
    homePhone: string;
    mobilePhone: string;
    addressalias: string;


    constructor(emailId:string, 
        firstname: string,
        lastname: string,
        password: string,
        company: string,
        address: string,
        addressLine2: string,
        city: string,
        postalCode: string,
        additionalInfo: string,
        homePhone: string,
        mobilePhone: string,
        addressalias: string,
    ) {
        this.emailId = emailId
        this.firstname = firstname
        this.lastname = lastname
        this.password = password
        this.company = company
        this.address = address
        this.addressLine2 = addressLine2
        this.city = city
        this.postalCode = postalCode
        this.additionalInfo = additionalInfo
        this.homePhone = homePhone
        this.mobilePhone = mobilePhone
        this.addressalias = addressalias

    }
}