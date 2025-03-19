import Navbar from "./components/nav"
import Slider from "./components/slider"
import Category from "./components/category"
import AboutSection from "./components/about_section"
import InsideSchool from "./components/Inside_school"
import PhotoGallery from "./components/photo_gallery"
import Footer from "./components/footer"

function App() {
 
   return(
    <div className="w-screen h-[400vh] bg-zinc-200">
      <div className="h-[20vh] ml-20 py-5 flex">
        <img src="public\images\delhi_logo.jpg" alt="" className="h-[15vh] border-2 border-black rounded-md" />
        <div className="mt-5 ml-10">
        <h1 className="uppercase font-semibold text-5xl">delhi public school</h1>
        <h6>Narhan Estate (Samastipur)</h6>
        </div>
      </div>
      <Navbar/>
      <Slider className=""/>
      <Category/>
      <AboutSection/>
      <InsideSchool/>
      <PhotoGallery/>
      <Footer/>

    </div>
   )

}

export default App
