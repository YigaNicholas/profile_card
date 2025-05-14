import React from "react";
import pic from "../assets/headphones.jpg"

const ModernProduct =()=>{

    return(
     <>   
<div className="max-w-xs rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
  <div className="relative pb-2/3 h-48">
    <img className="absolute h-full w-full object-cover" src={pic} alt="Product" />
  </div>
  <div className="p-5">
    <div className="flex justify-between items-start">
      <h3 className="text-lg font-semibold text-gray-900">Premium Headphones</h3>
      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">New</span>
    </div>
    <p className="mt-2 text-gray-600">Noise cancelling wireless headphones with 30hr battery</p>
    <div className="mt-4 flex justify-between items-center">
      <span className="text-xl font-bold text-gray-900">$199.99</span>
      <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
        Add to cart
      </button>
    </div>
  </div>
</div>



  


</>


    )
}

export default ModernProduct;