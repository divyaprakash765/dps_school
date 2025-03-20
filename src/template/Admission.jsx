import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/nav";

const Admission = () => {
  const navigate = useNavigate(); // For navigating back

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
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-300 to-green-300 w-full p-4 flex justify-between items-center shadow-md rounded-md max-w-3xl">
        <h2 className="text-lg font-semibold text-gray-800">Pay School Fee Online</h2>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold p-2 rounded-full shadow-md"
        >
          ⬅
        </button>
      </div>

      {/* Image Section */}
      <div className="bg-green-400 mt-4 p-4 rounded-lg shadow-lg max-w-3xl w-full">
        <div className="bg-blue-500 p-4 rounded-lg">
          <img
            src="http://davchamba.org/File/408/online.jpg"
            alt="Pay School Fee Online"
            className="w-full rounded-md"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Admission;
