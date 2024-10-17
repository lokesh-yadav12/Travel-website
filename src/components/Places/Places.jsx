import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "Boating offers a serene and exciting way to explore the beauty of water bodies, whether you're on a peaceful lake, winding river, or open sea. It’s a versatile activity that can be as relaxing or adventurous as you choose, from leisurely cruises under the sun to thrilling speedboat rides.",
    price: 6600,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
    "The Taj Mahal, located in Agra, India, is one of the most iconic symbols of love and architectural brilliance. Built by Mughal Emperor Shah Jahan in the 17th century in memory of his beloved wife, Mumtaz Mahal, this white marble mausoleum is a UNESCO World Heritage Site.",  
    price: 6400,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
      "The underwater world is a mesmerizing realm filled with vibrant marine life, colorful coral reefs, and mysterious depths. Beneath the surface, ecosystems thrive in a delicate balance, home to diverse species like fish, turtles, and rays, as well as breathtaking coral formations. ", 
    price: 6100,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "The underwater world is a very mesmerizing realm filled with vibrant marine life, colorful coral reefs",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6400,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
    "The underwater world is a mesmerizing realm filled with vibrant marine life, colorful coral reefs, and mysterious depths. Beneath the surface, ecosystems thrive in a delicate balance, home to diverse species like fish, turtles, and rays, as well as breathtaking coral formations. ",  
    price: 6000,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
