import { NavLink } from "react-router-dom";

const categories = [
    { title: "Contact Us",to:"/help", icon: "🔔", bgColor: "bg-red-500" },
    { title: "Pay School Fee Online",to:"/admission", icon: "📄", bgColor: "bg-gray-500" },
    { title: "Student Achievements",to:"/achievements", icon: "🖥️", bgColor: "bg-green-400" },
    { title: "Online Admission",to:"/admission", icon: "📜", bgColor: "bg-red-300" },
    { title: "Photo Gallery",to:"/gallery", icon: "📷", bgColor: "bg-red-600" },
  ];
  
  const Category = () => {
    return (
      <div className="flex justify-center bg-zinc-200 gap-8 mt-12 px-4 flex-wrap">
        {categories.map((item, index) => (
          <NavLink
          to={item.to}
            key={index}
            className={`${item.bgColor} w-60 h-28 flex flex-col items-center justify-center rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300`}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md">
              <span className="text-2xl">{item.icon}</span>
            </div>
            <p className="text-white font-bold mt-2 text-center">{item.title}</p>
          </NavLink>
        ))}
      </div>
    );
  };
  
  export default Category;
  