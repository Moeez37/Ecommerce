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
export function maptoRequiredStructure(obj) {
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
export function mapAndFilteroutDetailsofCartItem(cart, products) {
    const idsOfCartItems = Object.keys(cart);

    // Filter products based on whether their IDs are present in the cart
    const filteredItems = products.map(prod => {
        if (idsOfCartItems.includes(prod.id.toString())) {
            const cartItem = cart[prod.id.toString()]; // Fetch corresponding cart item
            const quantity = cartItem.itemQuantity || 0; // Retrieve quantity, default to 0 if not found
            // Return a new object with updated quantity
            return {
                ...prod,
                itemQuantity: quantity
            };
        }
        return null; // Return null for products not found in the cart
    }).filter(Boolean); // Filter out null values
    console.log(filteredItems)
    return filteredItems;
}
