import React from "react";
import { Carousel } from "react-responsive-carousel";

const Scroll = () => {
  return (
    <Carousel className="scroll">
      <div>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/93/d0/8f/photo2jpg.jpg" />
        <p className="legend">Restaurante mexicano</p>
      </div>
      <div>
        <img src="" />
        <p className="legend">Legend 2</p>
      </div>
    </Carousel>
  );
};

export default Scroll;
