import Navbar from "../components/nav";
import Slider from "../components/slider";
import Category from "../components/category";
import AboutSection from "../components/about_section";
import TabsComponent from "../components/TabsComponent";
import PhotoGallery from "../components/photo_gallery";
import Footer from "../components/footer";
import { Route,Routes } from "react-router-dom";

function Home(){

    const menuItems = [
        "HOME",
        "ABOUT",
        "ACADEMIC",
        "ADMISSION",
        "ACHIEVEMENTS",
        "GALLERY",
        "FACULTY",
        "FACILITIES",
        "CIRCULARS",
        "HELP",
      ];

    return(
        <div className="w-full min-h-screen bg-zinc-200">
      {/* Header Section */}
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


      {/* Components */}
      <Navbar />
      <Slider />
      <Category />
      <AboutSection />
      <TabsComponent />
      <PhotoGallery />
      <Footer />
    </div>
    )
}

export default Home