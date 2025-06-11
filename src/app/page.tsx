import HeroSection from "@/components/HeroSection"
import FeaturedCources from "@/components/FeaturedCources";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusciSchoolTestinonial from "@/components/TestinonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection/>
        <FeaturedCources/>
        <WhyChooseUs />
        <MusciSchoolTestinonial />
        <UpcomingWebinars />
        <Instructors />
        <Footer/>
      </main>
      
  );
}
