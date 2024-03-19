import React, { useEffect, useState } from "react";
import ProductCard from "../../../Custom/customComponents/ProductCard";

function ProductContainer({ catagory }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(catagory ? `https://fakestoreapi.com/products/category/${catagory}` : 'https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setTimeout(() => {
                    setItems(json);
                    setLoading(false);
                }, 5000);
            });
    }, []);

    const products = items.map((item, index) => (
        <ProductCard key={index} item={item} />
    ));

    return (
        <>
            {!loading ? products : <h1>Loading...</h1>}
        </>
    );
}

export default ProductContainer;
