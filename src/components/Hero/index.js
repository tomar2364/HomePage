import React from "react";
import imag from "../../images/Bg1.svg";
import { HeroContainer, HeroBg, imageBg, BtnLink, Btn } from "./heroelements";
function HeroS() {
  return (
    <HeroContainer>
      <HeroBg>
        <imageBg>
          <img src={imag} alt="background" />
        </imageBg>
        <Btn>
          <BtnLink to="/sign.in">SIGN UP NOW</BtnLink>
        </Btn>
      </HeroBg>
    </HeroContainer>
  );
}

export default HeroS;
