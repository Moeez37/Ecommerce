import { useEffect, useState } from "react";

const Menue = ({ setCatagory }) => {
  const [catagories, setCatagories] = useState();
  useEffect(() => {
    const res = fetch('https://fakestoreapi.com/products/categories').then(async res => {
      const cat = await res.json()
      setCatagories(cat)
    }).catch(error => {
      console.log(`error ${error}`);
    })

  }, [])
  const categories = ["Automobiles", "Clothes and wear", "Home interiors", "Computer and tech", "Tools, equipments", "Sports and outdoor", "Animal and pets", "Machinery tools", "More catefory"]
  return (
    <div className="flex flex-col bg-gray-200 rounded-md p-4">
      {catagories && catagories.map((category, index) => (
        <div
          key={index}
          className="py-2 px-4 cursor-pointer transition duration-300 hover:bg-blue-100 rounded-md"
          onClick={() => setCatagory(category)}
        >
          {category}
        </div>
      ))}
    </div>)
}
export default Menue;