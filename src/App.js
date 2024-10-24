import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import NavItems from "./components/NavItems/NavItems";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <UserProvider>
      <Header />
      <NavItems />
      <Hero />
      <HeroSlider />
    </UserProvider>
  );
}

export default App;
