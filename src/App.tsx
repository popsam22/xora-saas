import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Testimonials from "./sections/Testimonials";
import Downloads from "./sections/Downloads";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Downloads />
    </main>
  );
};

export default App;
