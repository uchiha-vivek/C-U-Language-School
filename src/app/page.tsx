import Certification from "@/components/certification-company";
import GetStarted from "@/components/containers/get-started";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/hero-section";
import LearningStyle from "@/components/learning-style";
import Navbar from "@/components/Navbar/Navbar";
import Pricing from "@/components/pricing";
import SubHeroSection from "@/components/sub-hero-section";
import { Button } from "@/components/ui/button";



export default function Home() {

  return (
    <>
      <div>
        <Navbar />
        <HeroSection/>
        <main className=" " >
           <div className="" >
        <SubHeroSection/>
           </div>
          
           
          <LearningStyle/>
        </main>
        <Footer />
      </div>
    </>
  )

}