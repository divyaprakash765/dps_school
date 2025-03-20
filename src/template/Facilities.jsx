import Navbar from "../components/nav";
import Footer from "../components/footer";

const Facilities = () => {
  const infrastructureData = [
    { category: "Rooms", use: "Nursery to Std. X Class", size: '24" x 20"', nos: 64 },
    { category: "Rooms", use: "Jr. & Sr. Staff Room", size: '24" x 20"', nos: 3 },
    { category: "Rooms", use: "Store", size: '15" x 8"', nos: 1 },
    { category: "Rooms", use: "Exam department", size: '15" x 8"', nos: 1 },
    { category: "Rooms", use: "Sports Department", size: '24" x 20"', nos: 2 },
    { category: "Rooms", use: "NCC", size: '24" x 20"', nos: 1 },
    { category: "Rooms", use: "Art", size: '24" x 20"', nos: 1 },
    { category: "Rooms", use: "Music", size: '24" x 20"', nos: 1 },
    { category: "Rooms", use: "Tin shade", size: '24" x 20"', nos: 5 },
    { category: "Rooms", use: "Library", size: '46" x 23"', nos: 1 },
    { category: "Labs", use: "Phy, Chem, Bio, 1 Comp.", size: '50" x 20"', nos: 4 },
    { category: "Labs", use: "Comp. Lab", size: '29" x 23"', nos: 1 },
    { category: "Labs", use: "Maths, S. ST.", size: '24" x 20"', nos: 2 },
    { category: "Admin. Deptt.", use: "Principal & S. H. Chamber and Office", size: '24" x 20"', nos: 3 },
    { category: "Hall", use: "Seminar", size: '48" x 20"', nos: 1 },
    { category: "Hall", use: "Library Reading", size: '46" x 23"', nos: 1 },
    { category: "Laboratories", use: "Staff & Students", size: "-", nos: 37 },
    { category: "Urinals", use: "Staff & Students", size: "-", nos: 51 },
    { category: "Bathrooms", use: "Staff & Students", size: "-", nos: 34 },
  ];

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

      <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-green-700 mb-4">Infrastructure</h2>

        {/* Table */}
        <div className="overflow-x-auto w-full max-w-6xl">
          <table className="w-full border-collapse border border-green-500">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="border border-green-500 px-4 py-2">CATEGORY</th>
                <th className="border border-green-500 px-4 py-2">USE</th>
                <th className="border border-green-500 px-4 py-2">SIZE</th>
                <th className="border border-green-500 px-4 py-2">NOS.</th>
              </tr>
            </thead>
            <tbody>
              {infrastructureData.map((item, index) => (
                <tr key={index} className="hover:bg-green-100">
                  <td className="border border-green-500 px-4 py-2 font-semibold bg-green-200">{item.category}</td>
                  <td className="border border-green-500 px-4 py-2">{item.use}</td>
                  <td className="border border-green-500 px-4 py-2">{item.size}</td>
                  <td className="border border-green-500 px-4 py-2">{item.nos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Facilities;
