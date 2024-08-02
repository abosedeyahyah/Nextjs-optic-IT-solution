import React from "react";

export default function AchievementsPage() {
  return (
    <div className="">
      <section
        className="bg-white py-12"
        style={{ backgroundImage: "url('/Images/Camera-img.png')" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Our Core Expertise
          </h2>
          <p className="text-2lg text-center mb-8 text-white">
            At OpticsIt Solutions, we have the skilled professionals to excel in
            the following Information and Communication Technology domains.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/Images/Laptop-img.png"
                alt="Computer Merchandise"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Computer Merchandise</h3>
                <p>
                  High-quality computer products to enhance your productivity.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/Images/About-img.png"
                alt="Computer Merchandise"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Computer Merchandise</h3>
                <p>
                  High-quality computer products to enhance your productivity.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/Images/Electronic-img.png"
                alt="Computer Merchandise"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Computer Merchandise</h3>
                <p>
                  High-quality computer products to enhance your productivity.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/Images/block-img.png"
                alt="Computer Merchandise"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Computer Merchandise</h3>
                <p>
                  High-quality computer products to enhance your productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
              <h2 className="text-3xl font-bold mb-4">Trusted by Many</h2>
              <h3 className="text-2xl font-semibold mb-4">Our Achievements</h3>
              <p className="mb-6">
                We are proud of our track record in delivering quality IT
                services. 
              </p>
              <p>Our commitment to excellence has earned us the trust
              of numerous clients.</p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/Images/Keyboard-img.png"
                alt="Achievements"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-40 border-right: 1px solid ">
            <div className="text-center">
              <h4 className="text-4xl font-bold">2016</h4>
              <p>Founded</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold">200+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold">150+</h4>
              <p>Happy Clients</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold">10</h4>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
