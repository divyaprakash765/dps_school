import React from "react";
import Navbar from "../components/nav";
import Footer from "../components/footer";

const About = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row items-center md:items-start py-5 px-4 md:px-20">
        {/* Logo */}
        <img
          src="/images/delhi_logo.jpg"
          alt="Delhi Public School Logo"
          className="h-20 md:h-[15vh] border-2 border-black rounded-md"
        />
        {/* School Info */}
        <div className="mt-3 md:mt-5 md:ml-10 text-center md:text-left">
          <h1 className="uppercase font-semibold text-2xl md:text-[5vh]">
            Delhi Public School
          </h1>
          <h6 className="text-sm md:text-base">Narhan Estate (Samastipur)</h6>
        </div>
      </div>
        <Navbar/>
    <div className="min-h-screen w-[full] flex flex-col items-center p-6 bg-gray-100">


      <div className="max-w-4xl bg-white rounded-lg shadow-lg mt-10 p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
          ABOUT OUR SCHOOL
        </h1>
        <img
          src="/images/school.jpg" // Update the path to your image
          alt="Delhi Public School"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <p className="mt-4 text-lg text-gray-700 text-center">
          Delhi Public School, located in the premises of the Narhan Estate, started in 
          2016 with a student strength of 150. Over the years, it has grown into an 
          institution that nurtures young minds, providing quality education and a 
          strong foundation for future leaders.
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;
