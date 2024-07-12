import Banner from "./components/banner.tsx";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import LogoTicker from "./components/logo-ticker";
import Features from "./components/features";
import ProductShowcase from "./components/product-showcase";
import Faq from "./components/faq";
import Cta from "./components/cta";
import Footer from "./components/footer";



export default function Home() {
  return (
    <main className="overflow-hidden">
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase/>
      <Faq/>
      <Cta/>
      <Footer/>
    </main>
  );
}
