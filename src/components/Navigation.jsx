import React from "react";

function Navigation(){
    return(
        <nav className="bg-white border-b border-gray-200 px-4 py-2.5 sticky top-0 z-50">
  <div className="flex flex-wrap justify-between items-center">
    <div className="flex justify-start items-center">
      <a href="#" className="flex items-center justify-between mr-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600">Brand</span>
      </a>
    </div>
    
    <div className="flex items-center lg:order-2">
      <button className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
        Sign in
      </button>
      <button className="ml-2 hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Sign up
      </button>
      <button className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">Open menu</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
    
    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-600 rounded lg:bg-transparent lg:text-blue-600 lg:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0">Features</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0">Pricing</a>
        </li>
        <li>
          <div className="relative group">
            <button className="flex items-center justify-between w-full py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 lg:w-auto">
              Dropdown <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
            <div className="absolute z-10 hidden group-hover:block bg-white shadow-lg rounded-lg w-48">
              <ul className="py-1">
                <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Item 1</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Item 2</a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Navigation;