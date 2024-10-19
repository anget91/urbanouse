import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { Description } from "./sections/Description";
import { Products } from "./sections/Products";
import { Testimonials } from "./sections/Testimonials";

function App() {
  return (
    <>
       <div className="w-full">
        <div className="max-w-[1500px] w-full mx-auto flex flex-col items-center">
          <Nav />
          <Hero />
          <Description />
          <Products />
          <Testimonials />
        </div>
      </div>
    </>
  );
}

export default App;
