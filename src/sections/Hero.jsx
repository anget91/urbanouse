import { ChevronDown, Search } from "lucide-react";
import { Dropdown } from "../components/Dropdown";
import { useEffect } from "react";

export function Hero() {
  useEffect(() => {
    const img = new Image();
    img.src = '/src/assets/house-hero.webp';
  }, []);

  return (
    <section className=" w-full px-5 md:px-10">
      <div className="w-full text-white ">
        <div className="bg-[url('/src/assets/house-hero.webp')]  bg-cover bg-center md:rounded-tl-[100px] lg:rounded-br-[100px] w-full relative h-[600px]">
          <div className=" flex flex-col items-center justify-center gap-4 h-full mx-12">
            <h1 className="drop-shadow-2xl font-semibold text-2xl md:text-5xl text-center">
              Find Your Dream Home <br /> With Urbanouse
            </h1>
            <p className="drop-shadow-2xl text-center whitespace-pre-line">
              Experience luxury and comfort with our exclusive real estate
              listings.{"\n"} Whether you're searching for a modern apartment, a
              spacious villa, or a commercial space, Urbanouse has the perfect
              property for you.
            </p>
          </div>
        </div>

        <div className=" relative grid grid-cols-2 md:flex gap-10 bg-white py-4 px-9 w-full lg:w-fit left-0 right-0 mx-auto lg:rounded-full -top-4 shadow-xl flex-wrap rounded-br-[50px] ">
          <Dropdown title="Buy/Rent" text="Buy" />
          <Dropdown title="Location" text="London" />
          <Dropdown title="Property Type" text="Family House" />
          <Dropdown title="Bedrooms" text="3 bedrooms" />
          <Dropdown title="Budget" text="$500,000" />

          <div className="flex items-center">
            <button
              className="bg-primary p-2 rounded-full"
              aria-label="Search properties"
            >
              <Search color="white" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
