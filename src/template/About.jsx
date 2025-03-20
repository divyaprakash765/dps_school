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
    <section id="about-school" className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title and Description */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">About DPS Narhan</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          DPS Narhan, a part of the prestigious Delhi Public School Society, is dedicated to nurturing young minds
          and shaping future leaders. With a strong foundation in academics, co-curricular activities, and values, the
          school aims to provide a holistic learning experience.
        </p>

        {/* Vision and Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-gray-700 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To empower students with knowledge, creativity, and ethical values that prepare them to excel in an
              ever-evolving world.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-gray-700 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              - To offer a learner-centric approach that promotes curiosity and innovation. <br />
              - To inculcate a strong sense of discipline, integrity, and compassion. <br />
              - To equip students with 21st-century skills to navigate global challenges confidently.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Academic Excellence</h4>
            <p className="text-gray-600">We provide a robust curriculum to help students build critical thinking and analytical skills.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Qualified Faculty</h4>
            <p className="text-gray-600">Our experienced faculty nurtures young minds with passion and dedication.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Modern Infrastructure</h4>
            <p className="text-gray-600">DPS Narhan boasts state-of-the-art facilities, including smart classrooms and well-equipped labs.</p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-white p-6 shadow-lg rounded-lg mt-10 text-left max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-700 mb-4 text-center">Contact Us</h3>
          <p className="text-gray-600">
            <strong>Phone:</strong>{' '}
            <a href="tel:+918210202407" className="text-blue-500 hover:underline">
              8210202407
            </a>
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong>{' '}
            <a href="mailto:dpsnarhan@gmail.com" className="text-blue-500 hover:underline">
              dpsnarhan@gmail.com
            </a>
          </p>
          <p className="text-gray-600">
            <strong>Website:</strong>{' '}
            <a href="https://dpsnarhan.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              dpsnarhan.com
            </a>
          </p>
        </div>
      </div>
    </section>
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;
