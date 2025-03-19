import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/images/image1.jpg",  
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
];

const Slider = () => {
  return (
    <div className="w-full max-w-4xl bg-zinc-300 h-[65vh] w-[100vh] bg-[] mx-auto mt-4"> {/* ✅ Increased height to 60vh */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-lg shadow-lg h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center h-full">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-content rounded-lg" // ✅ Prevents cropping
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
