import React, { useState } from "react";
import Menue from "./Components/Menue";
import ImageContainer from "./Components/Image.js";
import ProductContainer from "./Components/ProductContainer.js";
import { json, useLoaderData, useNavigation } from "react-router-dom";
const Home = () => {
    const categories = useLoaderData();
    const navigation = useNavigation();
    const [catagory, setCatagory] = useState("")
    function onCategoryClick(value) {
        setCatagory(value);
    }

    return (
        <div className="flex flex-col">

            {(navigation.state === "loading") ? "loading..." : !catagory && <div className="container flex flex-row rounded-md mt-4 mx-4 bg-slate-400">
                <div className="basis-1/4 ">
                    <Menue setCatagory={onCategoryClick} categories={categories} />
                </div>
                <div className="basis-2/4">
                    <ImageContainer categories={categories} />
                </div>
                <div className="basis-1/4 flex flex-col"></div>
            </div>}

            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <ProductContainer catagory={catagory} />
            </div>

        </div>
    );
};
export default Home;

export async function loader() {
    try {
        const res = await fetch('https://api.escuelajs.co/api/v1/categories')
        const cat = await res.json()
        return cat;
    }
    catch (err) {
        throw json({ data: "Unable to fetch" }, { status: 400 })
    }
}