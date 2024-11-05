import { useState } from "react";

import NavB from "./components/NavB";
import Ftr from "./components/Footer";
import VerCard from "./components/verCard";
import Card from "./components/Card";
import PriceCard from "./components/priceCard";

import img1 from "./assets/2.png";
import img2 from "./assets/3.png";
import img3 from "./assets/4.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="top"></div>

      <NavB />
      <div className="home" id="home">
        <h1>
          The Best <a>GYM</a> <br /> You Will See
          <br />
          <a>Ever</a>
        </h1>
        <a className="Link" href="#one">
          See More
        </a>
      </div>
      <div className="content">
        <div id="one" className="one section">
          <h1>Why Us?</h1>
          <VerCard src={img1} txt="Most Cleaned Gym" dir="row" />
          <VerCard
            src={img2}
            txt="All The Machines You Want"
            dir="row-reverse"
          />
          <VerCard src={img3} txt="Best Quality Ever" dir="row" />
        </div>
        <div id="two" className="two section">
          <h1>Services</h1>
          <div className="row">
            <Card icon="fa-solid fa-dumbbell" txt="Dumbels Every Where" />
            <Card icon="fa-solid fa-shower" txt="Locker Room ." />
            <Card icon="fa-solid fa-wifi" txt="Free WIFI" />
            <Card icon="fa-regular fa-heart" txt="Fitness Room" />
          </div>
        </div>
        <div id="three" className="three section">
          <h1>Prices</h1>
          <div className="row">
            <PriceCard price="30" num="3" />
            <PriceCard price="50" num="6" />
            <PriceCard price="80" num="12" />
          </div>
        </div>
        <div id="four" className="four section">
          <h1>About Us</h1>

          <p>
            Welcome to Gymania! Founded in 2024, Gymania began with a simple
            goal: to create a space where people could come together, get fit,
            and feel their best. What started as a small local gym has grown
            into a vibrant fitness community, driven by passion and a commitment
            to helping every member reach their goals. From beginners to
            seasoned athletes, we welcome everyone and offer the best equipment,
            a variety of workout areas, and classes like HIIT and yoga. Our
            experienced trainers are here to guide you every step of the way. At
            Gymania, we’re more than just a gym. <br />we’re a place to build strength,
            confidence, and friendships. Join us and be part of our journey to a
            healthier, stronger community!
          </p>
        </div>
      </div>

      <Ftr />
    </>
  );
}

export default App;
