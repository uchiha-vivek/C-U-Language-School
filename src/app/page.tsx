import Certification from "@/components/certification-company";
import GetStarted from "@/components/containers/get-started";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Pricing from "@/components/pricing";
import { Button } from "@/components/ui/button";



export default function Home() {

  return (
    <>
      <div>
        <Navbar />
        <main className="container mx-auto p-4 " >
          <Certification />
          <Pricing />
          <GetStarted />
        </main>
        <Footer />
      </div>
    </>
  )

}