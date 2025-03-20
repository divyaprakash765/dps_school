import Footer from "../components/footer";
import Navbar from "../components/nav";

const Help = () => {
    return (
        <div>
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

      <div className="bg-gray-100 flex justify-center py-6">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 border">
          {/* Header */}
          <div className="bg-gradient-to-b from-green-400 to-white rounded-t-lg px-4 py-3">
            <h2 className="text-xl font-bold text-gray-800">Contact Us</h2>
          </div>
  
          {/* Contact Info */}
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900">DELHI PUBLIC SCHOOL</h3>
            <p className="text-gray-700">Narhan Estate</p>
            <p className="text-gray-700">Samastipur</p>
  
            <p className="mt-2 text-gray-700">
              <strong>Email:</strong>{" "}
              <a href="mailto:dpsnarhan@gmail.com" className="text-blue-600 hover:underline">
              dpsnarhan@gmail.com
              </a>
            </p>
  
            <p className="text-gray-700">
              <strong>Phone:</strong> 8210202407
            </p>
  
            <p className="text-gray-700">
              <strong>Website:</strong>{" "}
              <a href="http://dps.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                dps.org
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    );
  };
  
  export default Help;
  