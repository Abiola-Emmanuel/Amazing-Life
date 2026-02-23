import HeroCarousel from "./components/HeroCarousel";
import MainBody from "./components/MainBody";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroCarousel />
      <MainBody />
    </main>

  );
}
