import HouseImg from "../assets/house-hero.webp";
import PropTypes from "prop-types";

export function Product({
  img = HouseImg,
  price = "N/A",
  title = "Untitled Property",
  beds = "N/A",
  baths = "N/A",
  sq = "N/A",
}) {
  return (
    <div className="flex flex-col gap-3">
      <img
        src={img}
        alt={`Urbanouse ${title}`}
        title={`Urbanouse ${title}`}
        loading="lazy"
        className="h-96 w-[26rem] object-cover rounded-bl-[20px] rounded-tr-[20px]"
        height={384}
        width={416}
      />
      <div className="flex flex-col">
        <div className="text-primary font-semibold text-xl flex flex-col gap-2">
          <span>${price}</span>
          <span>{title}</span>
        </div>
        <div className="flex gap-3 text-black/60 font-medium">
          <span>{beds} beds</span>
          <span>{baths} baths</span>
          <span>{sq} sq.ft</span>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  img: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  beds: PropTypes.string,
  baths: PropTypes.string,
  sq: PropTypes.string,
};
