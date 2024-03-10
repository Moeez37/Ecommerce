const  Menue=()=>{
    const categories=["Automobiles","Clothes and wear","Home interiors","Computer and tech","Tools, equipments","Sports and outdoor","Animal and pets","Machinery tools","More catefory"]
    return(
       <div className="flex flex-col bg-gray-200 rounded-md p-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="py-2 px-4 cursor-pointer transition duration-300 hover:bg-blue-100 rounded-md"
        >
          {category}
        </div>
      ))}
    </div>)
}
export default Menue;