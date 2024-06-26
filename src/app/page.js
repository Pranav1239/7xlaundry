import Header from "../components/Header/Header";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import FourSection from "../components/FourSection/FourSection";
import Carousel from "../components/Carousel/Carousel";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "7xLaundry - Laundry & Dry Cleaning Services Jaipur",
  description: "Generated by create next app",
};
export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <ImageSlider />
      <FourSection />
      <div className="m-auto max-w-[1350px]">
        <Carousel />
      </div>
      <About />
      <Footer />
    </div>
    );
}
