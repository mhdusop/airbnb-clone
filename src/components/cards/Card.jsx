/* eslint-disable react/prop-types */
import { CardImage } from "./CardImage";
import { CardTitle } from "./CardTitle";
import cardData from "../../data/cards/cardData.js";

export const Card = () => {
  return (
    <div className="flex flex-wrap">
      {cardData.cards.map((card, index) => (
        <div className="p-3 w-full lg:w-1/5 md:w-1/3" key={index}>
          <div className="bg-white rounded-lg">
            <CardImage images={card.images} />
            <CardTitle
              title={card.title}
              subtitle={card.subtitle}
              price={card.price}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
