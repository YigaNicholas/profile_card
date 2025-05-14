import React from "react";
import pic from '../assets/carrasco.jpg'

function Profile(){
    return(
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={pic} alt="Profile" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Designer</div>
            <h2 className="mt-1 text-2xl font-bold text-gray-900">carrasco</h2>
            <p className="mt-2 text-gray-600">Creating beautiful user experiences with attention to detail and passion for design systems.</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              {/* Add more social icons */}
            </div>
          </div>
        </div>
      </div> 
    )
}
export default Profile;