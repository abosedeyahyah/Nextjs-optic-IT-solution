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
        <div className="container mx-auto px-4 flex flex-col lg:flex-row ">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Ready to Optimize Your IT?
            </h2>
            <p className="mb-8">
              Contact us today to learn more about our services.
            </p>
          </div>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold">
              Get started
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-bold">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-blue-900 text-white py-8">
        <div className="container text-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-black">
            <div>
              <h3 className="font-bold text-xl mb-4">About Us</h3>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Our Services</h3>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Our Services</h3>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Our Services</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 mt-40 ">
            <div className="flex flex-col lg:flex-row">
          <div className="">
          <p className="text-black font-medium mt-5">Connect with us:</p>
          </div>
            <div className="flex flex-col lg:flex-row gap-4 w-15 h-15 px-3">
            <img src="/Images/facebook.png" alt="" srcset="" />
              <img src="/Images/twitter.png" alt="" srcset="" />
              <img src="/Images/instagram.png" alt="" srcset="" />
            </div>
            </div>
          <div>
          <p className="mt-5 font-medium">&copy; Optic IT Solutions 2023. All Rights Reserved.</p>
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
