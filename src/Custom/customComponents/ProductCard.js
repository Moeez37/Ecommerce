function ProductCard({ item }) {
    const { id, title, price, description, image } = item;

    return (
        <div className="max-w-xs w-full rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 truncate">{title}</div>
                <p className="text-gray-700 text-base truncate">
                    {description}
                </p>
                <p className="text-gray-900 text-lg mt-2">${price}</p>
                <div className="flex justify-between mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
