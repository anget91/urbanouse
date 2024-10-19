import HouseImg from "../assets/house-hero.webp";

export function Product({ 
  img = HouseImg, 
  price = "N/A", 
  title = "Untitled Property", 
  beds = "N/A", 
  baths = "N/A", 
  sq = "N/A" 
}) {
  return (
    <div className="flex flex-col gap-3">
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="h-96 w-[26rem] object-cover rounded-bl-[20px] rounded-tr-[20px]"
      />
      <div className="flex flex-col">
        <div className="text-primary font-semibold text-xl flex flex-col gap-2">
          <span>${price }</span>
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
