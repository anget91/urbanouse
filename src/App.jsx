import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { Description } from "./sections/Description";
import { Products } from "./sections/Products";
import { Testimonials } from "./sections/Testimonials";
import { Questions } from "./sections/Questions";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <>
      <div className="w-full  mx-auto flex flex-col items-center">
        <Nav />
        <Hero />
        <Description />
        <Products />
        <Testimonials />
        <Questions />
        <Footer />
      </div>
    </>
  );
}

export default App;
