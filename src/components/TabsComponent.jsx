import { useState } from "react";

const tabs = ["Events", "Achievements"];

const data = {
  Achievements: [
    {
      title: "हिंदुस्तान ओलंपियाड 2024",
      desc: "आज हिंदुस्तान ओलंपियाड 2024 का रिजल्ट आया जिसमें दिल्ली पब्लिक स्कूल नरहन बिभूतिपुर  के कई सारे बच्चों ने जिला लेवल पर 1 से 100 में अपना स्थान बनाकर विद्यालय और अपने माता-पिता का नाम रोशन",
      img: "https://www.htmedia.in/wp-content/uploads/2023/11/Hindustan-Olympiad-Banner-1-scaled-1.webp",
    },
  ],
  Events: [
    {
      title: "Independence Day",
      desc: "Independence Day is marked throughout India with flag-raising ceremonies...",
      img: "/images/image3.jpg",
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
