import HouseImg1 from "../assets/house-description.webp";
import HouseImg2 from "../assets/swimmingpool-expand.webp";
import HouseImg3 from "../assets/office-expand.webp";
import { CircleArrowUp } from "lucide-react";

export function Description() {
  return (
    <section className="w-full px-10 md:px-20 mt-24 flex flex-col gap-10">
      <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-6">
        <h2 className="text-3xl md:text-5xl font-medium md:w-1/3 text-primary">
          Your Dream Home, Our Expertise.
        </h2>
        <p className="md:w-1/3 text-black/60 text-lg font-medium">
          At Urbanouse, we are committed to helping individuals and families
          find their perfect homes and smart investment properties. Our approach
          blends personalized service, expert insights, and a dedication to
          excellence, ensuring your real estate journey is seamless, rewarding,
          and tailored to your unique needs.
        </p>
      </div>
      <div className="flex flex-col md:flex-wrap md:flex-row items-center gap-8 ">
        <div className="relative">
          <img
            src={HouseImg1}
            alt="Urbanouse Family House"
            loading="lazy"
            className="h-80 w-full max-w-[500px] min-w-60 object-cover rounded-bl-[40px] rounded-tr-[40px] brightness-75"
            title="Urbanouse Familt House"
            height={320}
            width={500}
          />
          <div className="absolute flex flex-col gap-1 bottom-4 left-10 text-white">
            <span className="text-xl font-medium drop-shadow-2xl">
              Family House
            </span>
            <span className="drop-shadow-2xl">487 Units</span>
          </div>
        </div>
        <img
          src={HouseImg2}
          alt="Urbanouse Family House"
          loading="lazy"
          className="h-80 max-w-[500px] w-full md:w-60 object-cover rounded-bl-[40px] rounded-tr-[40px] "
          title="Urbanouse Familt House"
          height={320}
          width={500}
        />
        <img
          src={HouseImg3}
          alt="Urbanouse Family House"
          loading="lazy"
          className="h-80 max-w-[500px] w-full md:w-60 object-cover rounded-bl-[40px] rounded-tr-[40px] "
          title="Urbanouse Familt House"
          height={320}
          width={500}
        />
        <div className="flex flex-col items-center text-primary gap-4 ">
          <CircleArrowUp
            strokeWidth={0.5}
            size={90}
            className="rotate-45 cursor-pointer"
          />
          <span className="text-center text-xl font-medium">
            More <br /> Projects
          </span>
        </div>
      </div>
    </section>
  );
}
