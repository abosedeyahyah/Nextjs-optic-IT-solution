import Head from "next/head";
import SolutionPage from "./SolutionPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Optic IT Solutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/* 
      <header className="bg-white-900 text-black">
        <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <div className="text-2xl font-bold"></div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
          </ul>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Chat Us
          </button>
        </nav>
      </header> */}

      <main className="">
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/Images/image1.png')" }}>
      <SolutionPage />
      <div className="flex flex-col items-start justify-center  h-full text-white px-4 text-left">
        <h3 className="text-4xl md:text-xl font-bold mb-2">Innovative IT Solutions for Modern Needs</h3>
        <h1 className="text-4xl md:text-5xl font-bold">Optic IT Solutions</h1>
        <p className="mt-4 text-lg md:text-xl">
          We are dedicated to providing top-notch IT services including computer<br/>
          merchandise, repair, maintenance, CCTV installation, networking,<br/>
          consultancy, and training. Let’s enhance your IT infrastructure together.
        </p>
        <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <a href="#learn-more" className="px-6 py-3 bg-blue-600 rounded-full">Learn More</a>
          {/* <a href="#chat-us" className="px-6 py-3 bg-green-600 rounded-full">Chat Us</a> */}
        </div>
      </div>
    </div>

        <section className="mx-auto p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 min:grid-cols-2 gap-8">
            <div className="mt-40">
              <h2 className="text-2xl font-bold mb-4">
                ABOUT THE OPTICS IT SOLUTIONS
              </h2>
              <p className="w-30 font-Georama py-3">
                We are dedicated to providing innovative and efficient IT<br/>
                solutions to meet your needs.
              </p>
              <p className="w-full font-Georama">
                At Optic IT Solutions, we envision a future where technology<br/>
                seamlessly integrates into everyday life, enhancing<br/>  efficiency
                and productivity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 min:grid-cols-4 gap-8 mb-auto">
              <div className="mt-7">
                <img
                  src="/Images/Camera-img.png"
                  alt="Service 1"
                  className="w-50 h-68 "
                />
              </div>
              <div className="">
                <img
                  src="/Images/Eletric-img.png"
                  alt="Service 2"
                  className="w-50 h-68"
                />
              </div>
              <div className="mt-5">
                <img
                  src="/Images/System-img.png"
                  alt="Service 3"
                  className="w-50 h-68 "
                />
              </div>
              <div>
                <img
                  src="/Images/Work-img.png"
                  alt="Service 4"
                  className="w-50 h-68"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
