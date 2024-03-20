export function ValidateUserInfoField(UserInfoObject) {

    for (const key in UserInfoObject) {
        if (UserInfoObject[key].current.getValue() == "") {
            UserInfoObject[key].current.Focus();
            return false;
        }

    }
    const userData = maptoRequiredStructure(UserInfoObject);
    return { isValid: true, userData };
}
function maptoRequiredStructure(obj) {
    return {
        ...userModal,
        email: obj["email"].current.getValue,
        username: obj["fullname"].current.getValue,
    }
}
export const userModal = {
    "email": "John@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "address": {
        "city": "kilcoole",
        "street": "7835 new road",
        "number": 3,
        "zipcode": "12926-3874",
        "geolocation": {
            "lat": "-37.3159",
            "long": "81.1496"
        }
    },
    "phone": "1-570-236-7033"
}