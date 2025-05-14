import React from "react";

function Animated (){
    return(
        <button className="relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg overflow-hidden group">
  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  <span className="relative">Hover Me</span>
</button>
    )
}

export default Animated;