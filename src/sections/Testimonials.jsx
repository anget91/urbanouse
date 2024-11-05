import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import ImgPeople from "../assets/people.webp";
export function Testimonials() {
  return (
    <section className="px-10 md:px-20 py-20 w-full mt-24 flex flex-col items-center gap-7 bg-zinc-100 ">
      <div className="flex flex-col md:flex-row justify-between w-full items-center gap-8">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl md:text-5xl font-medium text-primary">
            What People Are Saying
          </h2>
          <p className=" text-black/60 text-xl font-medium whitespace-pre-line">
            Real feedback from clients who&apos;ve experienced the Urbanouse{" "}
            {"\n"} difference.
          </p>
        </div>
        <div className="flex gap-5">
          <CircleArrowLeft
            size={50}
            strokeWidth={1}
            className="text-primary/60"
          />
          <CircleArrowRight
            size={50}
            strokeWidth={1}
            className="text-primary cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
        <div className="flex flex-col gap-5">
          <p className="text-primary text-xl md:text-2xl font-medium whitespace-pre-line">
            &quot;Urbanouse made buying our first home an absolute breeze!{" "}
            {"\n"} Their team was incredibly attentive and guided us through
            every step {"\n"} . We couldn&apos;t be happier with our new
            home.&quot;
          </p>
          <div className="text-lg font-medium">
            <p className="text-primary ">Sarah & Michael Stone </p>
            <span className="text-primary/60">Homeowners</span>
          </div>
        </div>
        <img
          src={ImgPeople}
          alt="imagen personas"
          loading="lazy"
          className="h-96 w-80 object-cover rounded-tr-[60px] rounded-bl-[60px]"
        />
      </div>
    </section>
  );
}
