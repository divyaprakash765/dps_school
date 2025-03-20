import { useNavigate } from "react-router-dom";
import Navbar from "../components/nav";
import Footer from "../components/footer";

const Gallery = () => {
  const navigate = useNavigate();

  // Sample image URLs (Replace with actual image paths)
  const images = [
    "/images/Gallery-1.jpg",
    "/images/Gallery-2.jpg",
    "/images/Gallery-3.jpg",
    "/images/Gallery-4.jpg",
    "/images/Gallery-5.jpg",
    "/images/Gallery-6.jpg",
    "/images/Gallery-7.jpg",
    "/images/Gallery-8.jpg",
    "/images/Gallery-9.jpg",
    "/images/Gallery-10.jpg",
    "/images/Gallery-11.jpg",
    "/images/Gallery-12.jpg",
    "/images/Gallery-13.jpg",
    "/images/Gallery-14.jpg",
    "/images/Gallery-15.jpg",
    "/images/Gallery-16.jpg",
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
          <h2 className="text-2xl font-semibold text-white">PHOTO GALLERY</h2>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold p-3 rounded-full shadow-md"
          >
            ⬅
          </button>
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

export default Gallery;
