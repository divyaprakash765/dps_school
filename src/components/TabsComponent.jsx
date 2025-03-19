import { useState } from "react";

const tabs = ["Events", "Achievements", "Social Awareness"];

const data = {
  Events: [
    {
      title: "International Literacy Day",
      desc: "Since 1967, International Literacy Day (ILD) celebrations have taken place annually...",
      img: "https://www.universityliving.com/blog/wp-content/uploads/2024/08/International-Literacy-Day_-Blog-Banner.webp",
    },
  ],
  Achievements: [
    {
      title: "Independence Day Celebration",
      desc: "Independence Day is marked throughout India with flag-raising ceremonies...",
      img: "/images/image3.jpg",
    },
  ],
  "Social Awareness": [
    {
      title: "International Day of Yoga",
      desc: "Reasons behind celebrating International Yoga Day on June 21...",
      img: "https://th.bing.com/th/id/OIP.5NZtOEcB9T7K8o97cpRQwgHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ],
};

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("Events");

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Tab Headers */}
      <div className="flex flex-wrap justify-center sm:justify-start space-x-2 border-b-2 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold rounded-t-lg transition-all ${
              activeTab === tab
                ? "bg-blue-500 text-white border-b-4 border-blue-700"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {data[activeTab].map((item, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-2 text-gray-700">{item.desc}</p>
            {item.img && (
              <img
                src={item.img}
                alt={item.title}
                className="mt-4 w-full sm:w-[90vh] rounded-lg shadow-md h-[50vh] mx-auto"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
