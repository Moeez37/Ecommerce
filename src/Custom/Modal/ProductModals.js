import React from 'react';

const ProductModalsJsx = ({ item, setShowModal }) => {
    const { name, price, description, image } = item;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl">
                <div className="relative p-4">
                    <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img src={image} alt="Product Image" className="mx-auto mb-6 rounded-lg size-1/4 object-cover" />
                    <h2 className="text-xl font-semibold mb-2">{name}</h2>
                    <p className="text-gray-700 mb-4">${price}</p>
                    <p className="text-gray-700 mb-4">{description}</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className="flex justify-start p-4">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-3">View</button>
                    </div><div className="flex justify-end p-4">
                        <button className="text-gray-900 bg-white hover:bg-gray-100 focus:outline-none border border-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModalsJsx;
