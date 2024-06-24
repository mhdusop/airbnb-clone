import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  FaWineBottle,
  FaSkiing,
  FaMountain,
  FaHome,
  FaWind,
  FaBuilding,
  FaBolt,
  FaBox,
  FaHotel,
  FaShip,
  FaTree,
  FaUmbrellaBeach,
  FaCampground,
  FaCaravan,
  FaCat,
  FaHorse,
  FaLeaf,
  FaLightbulb,
  FaRocket,
  FaSnowflake,
  FaSpa,
  FaSwimmer,
} from "react-icons/fa";

const categories = [
  { icon: <FaWineBottle />, label: "Anggur" },
  { icon: <FaSkiing />, label: "Ski" },
  { icon: <FaMountain />, label: "Puncak dunia" },
  { icon: <FaHome />, label: "Rumah cycladic" },
  { icon: <FaWind />, label: "Kincir angin" },
  { icon: <FaBuilding />, label: "Casa particular" },
  { icon: <FaBolt />, label: "Mandiri energi" },
  { icon: <FaHome />, label: "Minsu" },
  { icon: <FaBox />, label: "Kontainer" },
  { icon: <FaHotel />, label: "Ryokan" },
  { icon: <FaShip />, label: "Kapal pesiar" },
  { icon: <FaTree />, label: "Alam" },
  { icon: <FaUmbrellaBeach />, label: "Pantai" },
  { icon: <FaCampground />, label: "Kemah" },
  { icon: <FaCaravan />, label: "Karavan" },
  { icon: <FaCat />, label: "Pet-friendly" },
  { icon: <FaHorse />, label: "Peternakan" },
  { icon: <FaLeaf />, label: "Eco-friendly" },
  { icon: <FaLightbulb />, label: "Inovatif" },
  { icon: <FaRocket />, label: "Antariksa" },
  { icon: <FaSnowflake />, label: "Salju" },
  { icon: <FaSpa />, label: "Spa" },
  { icon: <FaSwimmer />, label: "Kolam renang" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 12,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 12,
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
