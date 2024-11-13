import { ArrowUpRight } from "lucide-react";
import { UrbanouseIcon } from "../components/UrbanouseIcon";

export function Footer() {
  return (
    <footer className="w-full ">
      <div className="bg-[url('/src/assets/house-description-big.webp')] bg-cover bg-center w-full h-[40rem] relative flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center gap-5 h-full mx-4">
          <h2 className="drop-shadow-2xl font-semibold text-xl md:text-5xl text-center text-white whitespace-pre-line">
            Ready To Find Your Dream Home {"\n"} With Urbanouse?
          </h2>
          <p className="drop-shadow-2xl text-base md:text-lg text-center whitespace-pre-line text-white">
            Join thousands of happy homeowners who found their perfect residence
            with us. {"\n"} Let&apos;s make your property journey smooth and
            successful.
          </p>
          <button className=" mt-5 flex px-5 py-3 items-center border border-white rounded-3xl gap-2 font-medium text-white backdrop-blur-md bg-white/20">
            Let&apos;s work together
            <ArrowUpRight
              size={25}
              strokeWidth={1}
              className="self-end"
              color="white"
            />
          </button>
        </div>

        <div className=" flex md:flex-row flex-col w-full md:justify-between gap-4 items-center py-4 px-4">
          <div className="flex items-center gap-1">
            <UrbanouseIcon color="white" className="md:w-10 md:h-10 w-5 h-5" />
            <span className="text-white  text-lg md:text-2xl">Urbanouse</span>
          </div>
          <div className="flex md:flex-row flex-col md:gap-9 gap-3 items-center  text-white/60 text-base">
            <a href="/" className="text-white">
              Home
            </a>
            <a href="/about" className="hover:text-white">
              About Us
            </a>
            <a href="/agents" className="hover:text-white">
              Agents
            </a>
            <a href="/collection" className="hover:text-white">
              Collection
            </a>
            <a href="/building" className="hover:text-white">
              Building
            </a>
            <a href="/services" className="hover:text-white">
              Services
            </a>
          </div>
          <span className="text-base text-white/60">
            ©2024 Urbanouse. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
