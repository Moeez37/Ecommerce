import React from "react";
import Menue from "./Components/Menue";
import Image from "./Components/Image.js";
import ProductContainer from "./Components/ProductContainer.js";
const Home = () => {
    return (
        <div className="flex flex-col">

            <div className="container flex flex-row mt-4 mx-4">
                <div className="basis-1/4 ">
                    <Menue />
                </div>
                <div className="basis-2/4">
                    <Image />
                </div>
                <div className="basis-1/4 flex flex-col"></div>
            </div>

            <div className="flex flex-row flex-wrap justify-between">
                <ProductContainer />
            </div>

        </div>
    );
};
export default Home;
