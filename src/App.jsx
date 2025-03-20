import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav";
import Slider from "./components/slider";
import Category from "./components/category";
import AboutSection from "./components/about_section";
import TabsComponent from "./components/TabsComponent";
import PhotoGallery from "./components/photo_gallery";
import Footer from "./components/footer";
import About from "./template/About";
import Academic from "./template/Academic";
import Admission from "./template/Admission";
import Sonu from "./template/Sonu";
import Home from "./template/Home";
import Achievement from "./template/Achievement";
import Gallery from "./template/Gallery";
import Facilities from "./template/Facilities";
import Help from "./template/Help";

function App() {
  return (
    <div>
      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/admission" element={<Admission />} />
        {/* Nested Route for Achievements */}
        <Route path="/achievements" element={<Achievement />} />
          <Route path="sonu" element={<Sonu />} /> {/* ✅ Fixed */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
