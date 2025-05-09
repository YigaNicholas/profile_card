import React from 'react';
import { FaReact, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import profile from '../assets/carrasco.jpg'


const Avartar = () => {
  return (
    
    <div class="max-w-xs mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  {/*top coloured setion*/}
  <div class="bg-blue-600 h-24 relative">
    {/* image*/}
    <img src={profile} alt="Profile" 
         class="w-24 h-24 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 top-12 shadow-md" />
  </div>
{/*information*/}
  
  <div class="pt-16 pb-6 px-6 text-center">
    <h2 class="text-xl font-semibold text-gray-800">Frontend-developer</h2>
    <p class="text-gray-500 text-sm mb-4">Tech Job-Seeker</p>

    {/* icons*/}
    <div class="flex justify-center space-x-4 mb-4 text-2xl text-gray-600">
     <FaLinkedin className='text-blue-700'/>
      <FaGithub/>
     <FaEnvelope className='text-red-500'/>
    </div>

    
    <button class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
      Message
    </button>
  </div>
</div>


  
  );
};

export default Avartar;