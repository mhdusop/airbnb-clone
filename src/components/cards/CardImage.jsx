/* eslint-disable react/prop-types */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoUpload } from "react-icons/go";

export const CardImage = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "0px",
          position: "absolute",
          bottom: "10px",
          wordSpacing: "2rem",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  if (images.length === 1) {
    return (
      <>
        <div className="w-full relative flex justify-end">
          <div className="rounded-full bg-slate-200 absolute z-10 p-2 top-3 mr-3">
            <GoUpload />
          </div>
        </div>
        <div className="aspect-ratio-box">
          <img src={images[0]} alt="Single Image" />
        </div>
      </>
    );
  }

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <div className="aspect-ratio-box">
            <img src={image} alt={`Slide ${index}`} />
          </div>
          <div className="w-full flex justify-end">
            <div className="rounded-full bg-slate-200 absolute z-10 p-2 top-3 mr-3">
              <GoUpload />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "10px",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "10px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
};
