import Footer from "../components/footer";
import GameFunComponent from "../components/games";
import HeaderComponent from "../components/header";
import Hero from "../components/hero";
import LittleAboutComponent from "../components/little-about";
import MissionsComponent from "../components/missions";
import StrengthComponent from "../components/strength";
import Testimonials from "../components/testimonials";
import WholeImage1Component from "../components/whole-image1";
import ContactComponent from "../components/contact";

const Home = function () {
  return (
    <div>
      <HeaderComponent />
      <Hero />
      <StrengthComponent />
      <WholeImage1Component />
      <LittleAboutComponent />
      <GameFunComponent />
      <MissionsComponent />
      <Testimonials />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Home;
