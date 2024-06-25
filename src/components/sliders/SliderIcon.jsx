import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  BsSnow,
  BsBuilding,
  BsLightbulb,
  BsUmbrella,
  BsHouseDoor,
  BsBox,
  BsWind,
  BsRocket,
  BsPinMap,
  BsCamera,
  BsHeart,
  BsHouse,
  BsTree,
  BsCloudSun,
} from "react-icons/bs";

const categories = [
  { icon: <BsTree />, label: "Puncak Dunia" },
  { icon: <BsHouseDoor />, label: "Rumah Cycladic" },
  { icon: <BsWind />, label: "Kincir Angin" },
  { icon: <BsBuilding />, label: "Casa Particular" },
  { icon: <BsHouse />, label: "Mandiri Energi" },
  { icon: <BsBox />, label: "Kontainer" },
  { icon: <BsBuilding />, label: "Ryokan" },
  { icon: <BsCloudSun />, label: "Kapal Pesiar" },
  { icon: <BsTree />, label: "Alam" },
  { icon: <BsUmbrella />, label: "Pantai" },
  { icon: <BsPinMap />, label: "Kemah" },
  { icon: <BsBox />, label: "Karavan" },
  { icon: <BsHeart />, label: "Pet-Friendly" },
  { icon: <BsTree />, label: "Peternakan" },
  { icon: <BsLightbulb />, label: "Eco-Friendly" },
  { icon: <BsRocket />, label: "Antariksa" },
  { icon: <BsSnow />, label: "Salju" },
  { icon: <BsCamera />, label: "Kolam Renang" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 14,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 14,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 8,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 6,
  },
};

export const SliderIcon = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      keyBoardControl={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center space-y-2 p-2">
          <div className="text-2xl">{category.icon}</div>
          <span className="text-xs text-gray-500">{category.label}</span>
        </div>
      ))}
    </Carousel>
  );
};
