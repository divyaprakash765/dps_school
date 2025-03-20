
import React from 'react';

const Sonu = () => {
  return (
    <section id="about-me" className="bg-gray-100 py-12 px-4">
        

      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">About Me</h2>
        <div className="flex justify-center">
  <div className="bg-white p-3 mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto">
    {/* Image */}
    <img
      src="/images/achievement-14.jpg"
      alt="Achievement"
      className="w-full h-[60vh] object-cover rounded-lg"
    />

    {/* Text Content */}
    <div className="mt-2 text-center">
      <h3 className="text-lg font-semibold text-gray-900">Sonu Kumar</h3>
      <p className="text-gray-700 text-sm">GATE 2025 Qualified</p>
      <p className="text-gray-700 text-sm">JEE Advance 2023 SC PREP Rank - 2</p>
      <p className="text-gray-600 text-sm">Civil Engineering, NIT Jamshedpur</p>
    </div>
  </div>
</div>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 mt-4 leading-relaxed">
          I am <strong>Sonu Kumar</strong>, a 3rd-year B.Tech student at NIT Jamshedpur, pursuing Civil Engineering. I am actively involved in various
          extracurricular and entrepreneurial activities. I am the co-founder of the <strong>'Jobs by Kundan Sir'</strong> YouTube channel, which recently
          got monetized and is on its way to becoming a national EdTech platform named <strong>'Competition Academy'</strong>. I have also developed multiple
          websites and apps, including for <strong>DPS Narhan</strong> and <strong>Kundan Sir</strong>.
        </p>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-gray-700 mb-3">Academic Achievements</h3>
            <p className="text-gray-600">
              I have qualified <strong>GATE 2025</strong> and secured <strong>SC PREP RANK 2</strong> in IIT JEE Advanced 2023. My academic performance
              reflects my dedication and strong problem-solving abilities.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-gray-700 mb-3">Technical Expertise</h3>
            <p className="text-gray-600">
              I specialize in web and app development, digital marketing, and stock trading. I have built multiple platforms and websites, ensuring a
              smooth user experience and driving growth through digital channels.
            </p>
          </div>
        </div>

        {/* Leadership & Competitions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">E-Cell Leadership</h4>
            <p className="text-gray-600">
              Heading the E-Cell inductions and leading major events like E-Summit and Startup Ideathon.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">EY Techathon 5.0</h4>
            <p className="text-gray-600">
              Participated in EY Techathon 5.0, developing an AI-powered financial advisor for rural India.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">InsuranceDekho POS</h4>
            <p className="text-gray-600">
              Currently working as a Point of Sales Person at InsuranceDekho, providing guidance and ensuring compliance.
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-white p-6 shadow-lg rounded-lg mt-10 text-left max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-700 mb-4 text-center">Contact Me</h3>
          <p className="text-gray-600">
            <strong>Phone:</strong>{' '}
            <a href="tel:+919708731471" className="text-blue-500 hover:underline">
              9708731471
            </a>
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong>{' '}
            <a href="mailto:clicksonu4846@gmail.com" className="text-blue-500 hover:underline">
              clicksonu4846@gmail.com
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
  );
};

export default Sonu;

