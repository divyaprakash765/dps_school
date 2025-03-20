import Footer from "../components/footer";
import Navbar from "../components/nav";

const Academic = () => {
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
      <div className="max-w-5xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg border">
        {/* Title */}
        <div className="bg-gradient-to-r from-green-300 to-blue-300 p-3 rounded-t-lg">
          <h2 className="text-lg font-bold text-gray-900">Rules And Regulations</h2>
        </div>
  
        {/* WITHDRAWALS Section */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-red-600">WITHDRAWALS</h3>
          <p className="text-gray-800 mt-2">
            Withdrawals from school must be preceded by one month notice in writing or a month’s fee is charged in lieu of the notice period. 
            All dues must be cleared before a Transfer Certificate is issued.
          </p>
          <p className="text-gray-800 mt-2">
            The school management may ask, without prior notice to the parents, to withdraw a student from the school on any of the following grounds:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Constant neglect of studies. Students securing single-digit marks (9 & below) in one or more subjects will not be eligible to continue.</li>
            <li>Violation of code of conduct or disciplinary rules.</li>
            <li>Non-payment of school dues.</li>
            <li>Attendance less than 75%.</li>
          </ul>
        </div>
  
        {/* ATTENDANCE & LEAVE RULES */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-red-600">ATTENDANCE & LEAVE RULES</h3>
          <p className="text-gray-800 mt-2">
            Attendance (Desirable 90%) - Minimum 75%.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Prior sanction of leave of absence, application on prescribed format through the class teacher.</li>
            <li>Student’s name will be struck off if absent for a week without prior sanction.</li>
            <li>Medical leave on production of medical certificate and fitness certificate.</li>
            <li>No petty / short leave.</li>
            <li>On medical grounds, students are allowed to go home with their parents.</li>
          </ul>
        </div>
  
        {/* BEST PRACTICES */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-red-600">BEST PRACTICES</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Planned teaching, learning, evaluation, and other activities like functions & celebrations.</li>
            <li>Stress on examples, derivation, application, conceptualization, and limitation of concepts/laws.</li>
            <li>Partnership with family and friends in the learning process.</li>
            <li>Regular correction & punctuality with daily attendance.</li>
            <li>Fool-proof security with boundary walls, fire extinguishers, and safety drills.</li>
            <li>Training for teachers & students in rescue, first aid, and firefighting.</li>
            <li>Competitive exams preparation: NTSE, Olympiads, IIT-JEE, AIEEE, AIPMT.</li>
            <li>Well-monitored dispersal and interval timing.</li>
            <li>Remedial coaching and enriched classes.</li>
            <li>First aid facilities.</li>
            <li>Green, clean & hygienic environment with sufficient washrooms.</li>
            <li>Uninterrupted power supply (JUSCO).</li>
            <li>Well-equipped labs and libraries.</li>
            <li>Regular teacher training (NCC, Martial Arts, Yoga, Physical Education).</li>
            <li>PT meetings ensuring transparency in student evaluations.</li>
            <li>Proper salary structure according to the VIth Pay Commission.</li>
            <li>Regular maintenance of school infrastructure & digital resources.</li>
            <li>Activity-based learning through practical demonstrations.</li>
          </ul>
        </div>
      </div>
      <Footer/>
      </div>
    );
  };
  
  export default Academic;
  