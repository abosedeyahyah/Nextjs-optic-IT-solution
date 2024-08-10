
import SolutionPage from "./SolutionPage";

export default function Home() {
  return (
    <div>
      <main>
        <div
          className="relative bg-cover bg-center h-screen "
          style={{ backgroundImage: "url('/Images/Homebackground-img.png')" }}
        >
          <SolutionPage />
          <div className="px-4 py-8 md:py-16 lg:py-24 max-w-7xl mx-auto">
            <div className="flex flex-col items-start space-y-4 text-white text-left mt-10">
              <h3 className="text-xl md:text-xl lg:text-xl font-bold">
                Innovative IT Solutions for Modern Needs
              </h3>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Optic IT 
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold" >Solutions</h1>
              <p className="mt-4 text-base md:text-lg lg:text-xl max-w-2xl">
                We are dedicated to providing top-notch IT services including
                computer merchandise, repair, maintenance, CCTV installation,
                networking, consultancy, and training. Let’s enhance your  IT
                infrastructure together.
              </p>
              <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <a
                  href="#learn-more"
                  className="px-6 py-3 bg-blue-600 text-white rounded-full text-sm md:text-base lg:text-lg"
                >
                  Learn More
                </a>
                <a
                  href="#chat"
                  className="text-white bg-green-600 px-6 py-3 rounded-full flex items-center gap-2 text-sm md:text-base lg:text-lg"
                >
                  <img
                    src="/Images/chat-img.png"
                    alt="Chat"
                    className="w-5 h-5"
                  />
                  Chat Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="mx-auto p-6 md:p-10 lg:p-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mt-10 lg:mt-20">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-[#2F2E2E]">
                ABOUT THE OPTIC IT SOLUTIONS
              </h2>
              <p className="font-Georama py-3">
                We are dedicated to providing innovative and efficient IT
                solutions to meet your needs.
              </p>
              <p className="font-Georama">
                At Optic IT Solutions, we envision a future where technology
                seamlessly integrates into everyday life, enhancing efficiency
                and productivity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="mt-5 lg:mt-0">
                <img
                  src="/Images/Camera-img.png"
                  alt="Service 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-5 lg:mt-0">
                <img
                  src="/Images/Eletric-img.png"
                  alt="Service 2"
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-5 lg:mt-0">
                <img
                  src="/Images/System-img.png"
                  alt="Service 3"
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-5 lg:mt-0">
                <img
                  src="/Images/Work-img.png"
                  alt="Service 4"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
