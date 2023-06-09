import { Toaster } from "react-hot-toast";
import BillingSection from "./views/BillingSection";
import BlurFilter from "./views/BlurFilter";
import BusinessDetails from "./views/BusinessDetails";
import CoinSection from "./views/CoinSection";
import Footer from "./views/Footer";
import Header from "./views/Header";
import HeroSection from "./views/HeroSection";
import NewsLetter from "./views/NewsLetterSection";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <BlurFilter/>
      <HeroSection />
      <BusinessDetails />
      <BillingSection/>
      <CoinSection/>
      <NewsLetter/>
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default App;
