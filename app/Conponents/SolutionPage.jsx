import React from "react";
export default function SolutionPage() {
  return (
    <nav className="bg-white py-2 rounded-full justify-center px-10 relative top-4 max-w-[1240px] mx-auto">
      <div className="max-w-7xl mx-auto  flex justify-between items-center">
        <div className="text-black">
          <img
            src="/Images/nav-image.png"
            alt=""
            srcset=""
            className="w-10 h-10"
          />
        </div>
        <div className="max-w-7xl mx-auto flex justify-between items-center space-x-6">
          <a href="#home" className="text-black">
            Home
          </a>
          <a href="#about" className="text-black">
            About us
          </a>
          <a href="#services" className="text-black">
            Services
          </a>
        </div>
        <a
          href="#chat"
          className="text-white bg-green-600 px-4 p-3 rounded-full flex items-center gap-2"
        >
          <img
            src="/Images/chat-img.png"
            alt=""
            srcset=""
            className="w-5 h-5"
          />
          Chat Us
        </a>
      </div>
    </nav>
  );
}
