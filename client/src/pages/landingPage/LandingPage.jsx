import React from 'react';
import HeroImage from '../../assets/images/HeroImage.jpg';
import Delivery from "../../assets/icons/Delivery.png";
import DineIn from "../../assets/icons/Dine-In.png";
import Takeaway from "../../assets/icons/Take-Away.png";
import Combo1 from "../../assets/images/combo1.jpg";
import Combo2 from "../../assets/images/combo2.jpg";
import Combo3 from "../../assets/images/combo3.jpg";
import Combo4 from "../../assets/images/combo4.jpg";
import Combo5 from "../../assets/images/combo5.jpg";
import Combo6 from "../../assets/images/combo6.jpg";
import './LandingPage.css';

const comboImages = [
  { src: Combo1, alt: "combo1" },
  { src: Combo2, alt: "combo2" },
  { src: Combo3, alt: "combo3" },
  { src: Combo4, alt: "combo4" },
  { src: Combo5, alt: "combo5" },
  { src: Combo6, alt: "combo6" },
  { src: Combo3, alt: "combo3" },
  { src: Combo4, alt: "combo4" },
  { src: Combo5, alt: "combo5" },
  { src: Combo6, alt: "combo6" },
];

export const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="landingPage-container-top">
        <img src={HeroImage} alt="heroimage" />
      </div>

      <div className="landingPage-container-middle">
        <div className="delivery-img">
            <img src={Delivery} alt="delivery" />
            <h2>Delivery</h2>
        </div>
        <div className="dine-in">
          <img src={DineIn} alt="dine-in" />
          <h2>Dine in</h2>
        </div>
        <div className="takeaway">
          <img src={Takeaway} alt="takeaway" />
          <h2>Take away</h2>
        </div>
      </div>

      <div className="landingPage-container-bottom">
        <h1>
          Sizzling <span className="underline">Special</span>
          <br />
          <span className="underline">Tasty</span> Combos<span>!</span>
        </h1>

        <div className="combo">
          {comboImages.map((combo, index) => (
            <img key={index} src={combo.src} alt={combo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};
