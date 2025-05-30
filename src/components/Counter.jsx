import React, { useState } from "react"

function Counter(){

    const[count, setCount] = useState(0)

    const increment= ()=>{
        setCount(c=>c+1);
    }

    const decrement =()=>{
        setCount(c=>c-1);
    }

    const reset =()=>{
        setCount(0);
    }
    return(
        <div className="text-center just">
            <h1 className="text-xl text-blue-500">counter app designed by tailwind css and react</h1>
            <div className=" space-x-4">
            <p className="text-[10rem] font-semibold mt-0" >{count}</p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={increment}>increment</button>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={decrement}>decrement</button>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={reset}>reset</button>
            </div>
        </div>
    )
}
export default Counter;