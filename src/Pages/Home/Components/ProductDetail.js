import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../store/Product';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
    // const param = useParams();
    // const dispatch = useDispatch();
    // const [loading, setLoading] = useState(true);
    // const { products, isFetched } = useSelector(state => state.products)
    // const { id, title, price, description, image } = products.find(item => item.id == param.productId);
    // document.body.style.overflow = "unset";
    // useEffect(() => {
    //     console.log(isFetched, "in the useEffect");
    //     if (isFetched) {

    //         setLoading(false);
    //         return
    //     }
    //     dispatch(fetchProducts());
    // }, [isFetched]);


    return (<>

        {loading ? "Loading..." : <div class="font-[sans-serif] bg-gray-700">
            <Link to=".." relative='path'><button className="m-9 text-white bg-gray-500 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-3">Back</button></Link>
            <div class="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
                <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div class="bg-gray-800 px-4 py-10 rounded-xl">
                            <img src={image} alt="Product" class="w-4/5 rounded object-cover" />
                        </div>
                        <div class="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-6 mx-auto">
                            <div class="bg-gray-800 rounded-xl p-4">
                                <img src={image} alt="Product2" class="w-24 cursor-pointer" />
                            </div>
                            <div class="bg-gray-800 rounded-xl p-4">
                                <img src={image} alt="Product2" class="w-24 cursor-pointer" />
                            </div>
                            <div class="bg-gray-800 rounded-xl p-4">
                                <img src={image} alt="Product2" class="w-24 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-2">
                        <h2 class="text-2xl font-extrabold text-yellow-300">{title}</h2>
                        <div class="flex flex-wrap gap-4 mt-4">
                            <p class="text-yellow-300 text-4xl font-bold">${price}</p>
                            <p class="text-gray-400 text-xl"><strike>${price}</strike> <span class="text-sm ml-1">Tax included</span></p>
                        </div>
                        <div class="flex space-x-2 mt-4">
                            <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <h4 class="text-white text-base">500 Reviews</h4>
                        </div>
                        <div class="flex flex-wrap gap-4 mt-8">
                            <button type="button" class="min-w-[200px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-bold rounded">Buy now</button>
                            <button type="button" class="min-w-[200px] px-4 py-2.5 border border-yellow-300 bg-transparent text-yellow-300 text-sm font-bold rounded">Add to cart</button>
                        </div>
                        <div class="mt-8">
                            <h3 class="text-lg font-bold text-yellow-300">About the coffee</h3>
                            <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-white">
                                <li>A cup of coffee is a beverage essential because of its timeless appeal</li>
                                <li>Easy to prepare. It can be brewed using various methods, from drip machines to manual pour-overs.</li>
                                <li>Available in various sizes, from a standard espresso shot to a large Americano, catering to different preferences.</li>
                                <li>You can customize your coffee by adding cream, sugar, or flavorings to suit your taste preferences.</li>
                            </ul>
                        </div>
                        <div class="mt-8">
                            <ul class="flex">
                                <li class="text-white font-bold text-sm bg-gray-800 py-3 px-8 border-b-2 border-yellow-300 cursor-pointer transition-all">
                                    Reviews</li>
                                <li class="text-white font-bold text-sm py-3 px-8 cursor-pointer">Sellter</li>
                            </ul>
                            <div class="mt-8">
                                <h3 class="text-lg font-bold text-yellow-300">Reviews(10)</h3>
                                <div class="space-y-3 mt-4">
                                    <div class="flex items-center">
                                        <p class="text-sm text-white font-bold">5.0</p>
                                        <svg class="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div class="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div class="w-2/3 h-full rounded bg-yellow-300"></div>
                                        </div>
                                        <p class="text-sm text-white font-bold ml-3">66%</p>
                                    </div>
                                    <div class="flex items-center">
                                        <p class="text-sm text-white font-bold">4.0</p>
                                        <svg class="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div class="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div class="w-1/3 h-full rounded bg-yellow-300"></div>
                                        </div>
                                        <p class="text-sm text-white font-bold ml-3">33%</p>
                                    </div>
                                    <div class="flex items-center">
                                        <p class="text-sm text-white font-bold">3.0</p>
                                        <svg class="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div class="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div class="w-1/6 h-full rounded bg-yellow-300"></div>
                                        </div>
                                        <p class="text-sm text-white font-bold ml-3">16%</p>
                                    </div>
                                    <div class="flex items-center">
                                        <p class="text-sm text-white font-bold">2.0</p>
                                        <svg class="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div class="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div class="w-1/12 h-full rounded bg-yellow-300"></div>
                                        </div>
                                        <p class="text-sm text-white font-bold ml-3">8%</p>
                                    </div>
                                    <div class="flex items-center">
                                        <p class="text-sm text-white font-bold">1.0</p>
                                        <svg class="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div class="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div class="w-[6%] h-full rounded bg-yellow-300"></div>
                                        </div>
                                        <p class="text-sm text-white font-bold ml-3">6%</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start mt-8">
                                <img src="https://readymadeui.com/team-2.webp" class="w-12 h-12 rounded-full border-2 border-white" />
                                <div class="ml-3">
                                    <h4 class="text-sm font-bold text-white">John Doe</h4>
                                    <div class="flex space-x-1 mt-1">
                                        <svg class="w-4 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-4 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-4 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <p class="text-xs !ml-2 font-semibold text-white">2 mins ago</p>
                                    </div>
                                    <p class="text-xs mt-4 text-white">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                                </div>
                            </div>
                            <button type="button" class="w-full mt-8 px-4 py-2 bg-transparent border-2 border-yellow-300 text-yellow-300 font-bold rounded">Read all reviews</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }    </>
    )
}

export default ProductDetail
