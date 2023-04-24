import React, { useState } from "react";
import "./Hero.css";
import heroImg from "../assets/hero.png";
import FoodList from "../components/Food/FoodList";
import { useSelector } from "react-redux";
import Data from "../Data/Data";
import Cart from "../components/Cart/Cart";

const Hero = () => {
  const [data, setData] = useState(Data);
  const showCart = useSelector((state) => state.show.cartIsShow);
  const buttons = ["Pizza", "Fruit", "Coffe", "Salad"]

  const categoryHandler = (foodCategory) => {
    const newCategory = Data.filter((foItem) => {
      return foItem.category === foodCategory;
    });
    setData(newCategory);
  };

  return (
    <>
      <div className="hero_section">
        <div className="text_section">
          <span className="bn">Best food 🍕</span>
          <h1>
            Order Online Favorite Food,{" "}
            <span className="span">At The delicious</span>
          </h1>
          <p>
            Find our perfect and delicious food, and enjoy it.
          </p>
          <a>Get started</a>
          {/* <a href="\categories">Get started</a> */}
        </div>
        <div className="image_section">
          <img src={heroImg} alt="hero" />
        </div>
      </div>
      {showCart && <Cart />}
      <div className="items_section" id="categories">
        <h1 className="search">
          Search Our Best
          <br />
          <span className="span">Specialities </span>
        </h1>
        <div className="categories">
          {buttons.map((btn) => <button onClick={() => categoryHandler(btn)}>{btn}</button>)}
        </div>
        <FoodList data={data} />
      </div>
    </>
  );
};

export default Hero;
