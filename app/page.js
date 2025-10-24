import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
