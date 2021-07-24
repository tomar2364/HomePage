import React from "react";
import "./Cards.css";
import TodoList from "./TodoList";
// import imag from "../images/Bg1.svg";
import CardItem from "./CardItem";
import feed from "./feed.svg";
import { HeroContainer, HeroBg, imageBg, BtnLink, Btn } from "./heroelements";
function HeroS() {
  return (
    <div>
      <HeroBg>
        <div className="cards__wrapper">
          <ul className="cards__it">
            <li>
              <ul className="cards__it card">
                <div className="menu cards1">
                  <CardItem to="/" />
                </div>
              </ul>
            </li>
            <li>
              <ul>
                <div className="">{/* <TodoList /> */}</div>
              </ul>
            </li>
            <li>
              <div className="feed">
                <img src={feed} />
              </div>
            </li>
          </ul>
        </div>
      </HeroBg>
    </div>
  );
}

export default HeroS;
