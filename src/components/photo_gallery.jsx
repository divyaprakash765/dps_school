import React from "react";

const images = [
  {
    src: "/images/pg1.jpg",
    alt: "DAV United Cricket Talent Hunt",
  },
  {
    src: "/images/pg2.jpg",
    alt: "DAV United Fit India Event",
  },
  {
    src: "/images/pg3.jpg",
    alt: "DAV United Festival",
  },
];

export default function PhotoGallery() {
  return (
    <div className="max-w-6xl mx-auto my-10 p-4">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        PHOTO GALLERY
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
