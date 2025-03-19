const AboutSection = () => {
    return (
      <div className="flex flex-wrap justify-center gap-6 px-6 py-8">
        {/* About Our School */}
        <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300">
          <h2 className="text-xl font-bold text-teal-600 px-6 py-4">
            ABOUT OUR SCHOOL
          </h2>
          <img
            src="/images/school.jpg" // Change to your actual image path
            alt="School Building"
            className="w-full h-80 object-cover"
          />
          <p className="text-gray-700 px-6 py-4">
            Delhi Public School, located in the premises of the Narhan Estate started in 2016 with student of 150
          </p>
          <div className="px-6 pb-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              READ MORE
            </button>
          </div>
        </div>
  
        {/* Principal's Message */}
        <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300">
          <h2 className="text-xl font-bold text-teal-600 px-6 py-4">
            PRINCIPAL'S MESSAGE
          </h2>
          <img
            src="/images/principal.jpg" // Change to your actual image path
            alt="Principal"
            className="w-full h-80 object-cover"
          />
          <p className="text-gray-700 px-6 py-4">
            “Education is the manifestation of the perfection that is already in
            man.” As I take over the reins of DAV Public School, NIT Campus...
          </p>
          <div className="px-6 pb-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutSection;
  