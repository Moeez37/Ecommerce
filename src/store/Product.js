import { createSlice } from "@reduxjs/toolkit";

const Products = createSlice({
    name: "products",
    initialState: { products: [], isFetched: false },
    reducers: {
        replaceProducts(state, action) {
            state.products = action.payload;
        },
        addProducts(state, action) {
            state.products = action.payload
        }
        ,
        LoadProduct(state, action) {
            state.products = action.payload;
            state.isFetched = true
        }
    }

})
export const fetchProducts = () => {
    return (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products")
            const result = await response.json();
            const response2 = fetch("https://api.escuelajs.co/api/v1/products").then(data => data.json()).then(data => {

                const filteredData = data.map(product => {
                    product.image = product.category.image
                    return JSON.parse(JSON.stringify(product, ["image", "id", "description", "price", "title"]))

                })
                console.log(filteredData)
                return filteredData

            })

            return [...result, ...(await response2)]
        }
        fetchData().then(product => { dispatch(Products.actions.LoadProduct(product)) });

    }
}
export default Products;
export const productsActions = Products.actions;
