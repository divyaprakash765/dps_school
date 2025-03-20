import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/nav";
import Footer from "../components/footer";

const Achievements = () => {
  const navigate = useNavigate();

  // Sample image URLs (Replace with actual image paths)
  const images = [
    "/images/achievement-1.jpg",
    "/images/achievement-2.jpg",
    "/images/achievement-3.jpg",
    "/images/achievement-4.jpg",
    "/images/achievement-5.jpg",
    "/images/achievement-6.jpg",
    "/images/achievement-7.jpg",
    "/images/achievement-8.jpg",
    "/images/achievement-9.jpg",
    "/images/achievement-10.jpg",
    "/images/achievement-11.jpg",
    "/images/achievement-12.jpg",
  ];

  return (
    <div>
      {/* School Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start py-5 px-4 md:px-20">
        {/* Logo */}
        <img
          src="/images/delhi_logo.jpg"
          alt="Delhi Public School Logo"
          className="h-24 md:h-28 border-2 border-black rounded-md"
        />
        {/* School Info */}
        <div className="mt-3 md:mt-5 md:ml-10 text-center md:text-left">
          <h1 className="uppercase font-semibold text-3xl md:text-5xl">
            Delhi Public School
          </h1>
          <h6 className="text-lg md:text-xl">Narhan Estate (Samastipur)</h6>
        </div>
      </div>

      <Navbar />

      {/* Achievements Section */}
      <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-400 to-blue-400 w-full p-6 flex justify-between items-center shadow-md rounded-md max-w-6xl">
          <h2 className="text-2xl font-semibold text-white">Student Achievements</h2>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold p-3 rounded-full shadow-md"
          >
            ⬅
          </button>
          
        </div>
        <div to="/sonu" className="bg-white p-3 mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105">
  {/* Image */}
  <img
    src="/images/achievement-14.jpg"
    alt="Achievement"
    className="w-full h-64 object-cover rounded-lg"
  />

  {/* Text Content */}
  <div className="mt-4 text-center">
    <h3 className="text-lg font-semibold text-gray-900">Sonu Kumar</h3>
    <p className="text-gray-700">GATE 2025 Qualified</p>
    <p className="text-gray-700">JEE Advance 2023 SC PREP Rank - 2</p>
    <p className="text-gray-600">Civil Engineering, NIT Jamshedpur</p>
  <NavLink className="px-2 py-1 bg-blue-500 rounded-md relative top-1 hover:text-white" to="/sonu">Read more</NavLink>
  </div>
</div>
        {/* Image Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 max-w-6xl px-4">
 

          {images.map((src, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={src}
                alt={`Achievement ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
                 
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Achievements;
