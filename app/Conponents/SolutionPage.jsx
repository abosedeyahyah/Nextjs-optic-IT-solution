import React from 'react'
import Link from 'next/link';
export default function SolutionPage  ()  {
  return (
    <nav className="bg-white py-2 rounded-full justify-center px-10">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <div className="text-black">
          <img src="/Images/nav-image.png" alt="" srcset="" />
        </div>
        <div className="max-w-7xl mx-auto p-4 flex justify-between items-center space-x-6">
          <a href="#home" className="text-black">Home</a>
          <a href="#about" className="text-black">About us</a>
          <a href="#services" className="text-black">Services</a>
        </div>
        <a href="#chat" className="text-white bg-green-600 px-4 py-2 rounded-full flex items-center gap-2"> <img src="/Images/chat-img.png" alt="" srcset="" />Chat Us</a>
        {/* <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div> */}
      </div>
    </nav>
  );
};


