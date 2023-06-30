import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Leading from "../components/Sections/Leads";
import Description from "../components/Description/Description";
import Works from "../components/HowItWorks/Works";
import Swipe from "../components/Reviews/Review";
import Sponsors from "../components/Sponsors/Sponsors";
import Footer from "../components/Footer/Footer";
import Counts from "../components/Counts/Counts";


function Landing() {
  return (
    <div className="Landing">
   <Navbar />
   <Hero />
   <Leading />
   <Description />
   <Works />
   <Counts />
   <Swipe />
   <Sponsors />
   <Footer />
    </div>
  );
}

export default Landing;
