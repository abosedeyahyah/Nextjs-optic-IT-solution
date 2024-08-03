import React from "react";

export default function CustomerPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h4 className="text-3xl font-bold text-center mb-8">Trusted by Many</h4>
          <h2 className="text-3xl font-bold text-center mb-8">
            Customer success stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md">
              <img
                src="/Images/Colunm-img.png"
                alt="Computer Merchandise"
                className="h-auto max-w-lg mx-auto"
              />
              <p className="mb-4 text-xl Georama">
                Optic IT Solutions has transformed our IT infrastructure. Their
                innovative approach and dedicated support are unparalleled.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md">
              <img
                src="/Images/Colunm-img.png"
                alt="Computer Merchandise"
                className="h-auto max-w-lg mx-auto"
              />
              <p className="mb-4 Georama text-xl">
                Optic IT Solutions has transformed our IT infrastructure. Their
                innovative approach and dedicated support are unparalleled.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <img
                src="/Images/Colunm-img.png"
                alt="Computer Merchandise"
                className="h-auto max-w-lg mx-auto"
              /> 
              <p className="mb-4 Georama text-xl max-w-3xl">
                Optic IT Solutions has transformed our IT infrastructure. Their
                innovative approach and dedicated support are unparalleled.
              </p>
            </div>
          </div>
        </div>

     <div className=" mt-4">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
            <div>
              <img src="/Images/Smith-img.png" alt="" srcset="" className="h-auto max-w-lg mx-auto " />
              <h3 className="font-bold text-xl text-center">Smith Ademola</h3>
              <p className="text-gray-600 text-center">CEO, TechCorp</p>
            </div>
            <div>
              <img src="/Images/smith-img1.png" alt="" srcset="" className="h-auto max-w-lg mx-auto" />
              <h3 className="font-bold text-xl text-center">Smith Ademola</h3>
              <p className="text-gray-600 text-center">CEO, TechCorp</p>
            </div>
            <div>
              <img src="/Images/smith-img1.png" alt="" srcset="" className="h-auto max-w-lg mx-auto"/>
              <h3 className="font-bold text-xl text-center">Smith Ademola</h3>
              <p className="text-gray-600 text-center">CEO, TechCorp</p>
            </div>
          </div>
     </div>
      </section>
      <section className="bg-white py-12 ">
        <div className="flex justify-between px-6 mx-auto">
          <div>
            <h2 className=" mb-4 text-4xl md:text-[40px] font-bold">
              Ready to Optimize Your IT?
            </h2>
            <p className="mb-8 text-4xl md:text-[20px] font-normal">
              Contact us today to learn more about our services.
            </p>
          </div>
          <div className="space-x-4">
            <button className="bg-[#093AB2] text-white px-6 py-3 rounded-lg font-bold">
              Get started
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-bold">
              Learn More
            </button>
          </div>
        </div>
      </section> 
      <footer className="bg-[#5480ED] text-white py-8">
        <div className="container text-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-[#252525]">
            <div>
              <h3 className="font-normal text-xl mb-4">About Us</h3>
            </div>
            <div>
              <h3 className="font-normal text-xl mb-4">Our Services</h3>
            </div>
            <div>
              <h3 className="font-normal text-xl mb-4">Our Services</h3>
            </div>
            <div>
              <h3 className="font-normal text-xl mb-4">Our Services</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 mt-40 ">
            <div className="flex flex-col lg:flex-row">
          <div className="px-4">
          <p className="text-black font-medium mt-2 ">Connect with us:</p>
          </div>
            <div className="flex flex-col lg:flex-row gap-4  px-3">
            <img src="/Images/facebook.png" alt="" srcset=""className="w-10 h-10" />
              <img src="/Images/twitter.png" alt="" srcset="" className="w-10 h-10" />
              <img src="/Images/instagram.png" alt="" srcset="" className="w-10 h-10" />
            </div>
            </div>
          <div>
          <p className="mt-5 font-medium ml-5">&copy; Optic IT Solutions 2023. All Rights Reserved.</p>
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
