import { ArrowUpRight } from "lucide-react";
import Product1 from "../assets/product1.webp";
import Product2 from "../assets/product2.webp";
import Product3 from "../assets/product3.webp";
import Product4 from "../assets/product4.webp";
import Product5 from "../assets/product5.webp";
import Product6 from "../assets/product6.webp";
import { Product } from "../components/Product";

export function Products() {
  return (
    <section className="px-10 md:px-20 mt-24 flex flex-col items-center gap-20 ">
      <div className=" flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-5xl font-medium text-primary text-center">
          Discover Our Exclusive Listings
        </h2>
        <p className="text-black/60 text-lg font-medium text-center">
          Explore a curated selection of top properties, handpicked to <br />{" "}
          offer you the finest in real estate.
        </p>
      </div>
      <div className=" flex flex-wrap gap-10 justify-center">
        <Product
          img={Product1}
          price="750,000"
          title="Golden Leaf Residence"
          beds="3"
          baths="2"
          sq="240"
        />
        <Product
          img={Product2}
          price="870,000"
          title="Palm Grove Residence"
          beds="4"
          baths="2"
          sq="600"
        />
        <Product
          img={Product3}
          price="920,000"
          title="Cedar Ridge Residence"
          beds="4"
          baths="4"
          sq="900"
        />
        <Product
          img={Product4}
          price="1,280,000"
          title="Cristal Park Residence"
          beds="6"
          baths="4"
          sq="1200"
        />
        <Product
          img={Product5}
          price="7,550,000"
          title="Silverstone Residence"
          beds="6"
          baths="4"
          sq="1500"
        />
        <Product
          img={Product6}
          price="1,750,000"
          title="Evergreen Residence"
          beds="4"
          baths="2"
          sq="1700"
        />
      </div>
      <button className="flex px-5 py-3 items-center border border-primary rounded-3xl gap-2 font-medium">
        Let&apos;s see other property
        <ArrowUpRight size={25} strokeWidth={1} className="self-end" />
      </button>
    </section>
  );
}
