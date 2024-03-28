import React, { useEffect, useState } from "react";
import { UseSelector, UseDispatch, useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../store/Product"
import ProductCard from "../../../Custom/customComponents/ProductCard";
import { Category } from "@mui/icons-material";
let count = 0;
function ProductContainer({ catagory }) {
    const { products, isFetched } = useSelector(state => state.products)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const utilityStates = {
        scrollPosition, setScrollPosition
    }
    console.log(count++, isFetched, "productcontiainer")
    useEffect(() => {
        console.log(isFetched, "in the useEffect of product Card");
        if (isFetched) {

            setLoading(false);
            return
        }
        dispatch(fetchProducts(catagory));
    }, [isFetched]);

    const productsJSx = products.map((item, index) => (
        <ProductCard key={index} item={item} utilityStates={utilityStates} />
    ));

    return (
        <>
            {!loading ? productsJSx : <h1>Loading...</h1>}
        </>
    );
}

export default ProductContainer;
