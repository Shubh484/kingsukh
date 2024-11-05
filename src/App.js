import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Gallary from "./components/Gallary/Gallary";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import NavItems from "./components/NavItems/NavItems";
import Services from "./components/Services/Services";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <UserProvider>
      <Header />
      <NavItems />
      <Hero />
      <HeroSlider />
      <Services />
      <Gallary />
      <Contact />
      <Footer />
    </UserProvider>
  );
}

export default App;
