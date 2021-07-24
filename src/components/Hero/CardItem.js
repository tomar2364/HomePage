import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import news from "./news.svg";
import play from "./playlist.svg";
import p2 from "./explore.svg";
import p3 from "./PM.svg";
import p4 from "./profile.svg";
import p5 from "./setting.svg";
import p6 from "./logout.svg";
function CardItem(props) {
  return (
    <>
      <li className="cards__item c1">
        <div>
          <Link className="cards__item__link" to={props.path}>
            <img src={news} />
          </Link>
        </div>
      </li>
      <li className="cards__item c2">
        <div>
          <Link className="cards__item__link" to={props.path}>
            <img src={play} />
          </Link>
        </div>
      </li>
      <li className="cards__item c3">
        <div>
          <Link className="cards__item__link" to={props.path}>
            <img src={p2} className="svgitems" />
          </Link>
        </div>
      </li>
      <li className="cards__item c4">
        <div>
          <Link className="cards__item__link" to={props.path}>
            <img src={p3} className="svgitems" />
          </Link>
        </div>
      </li>
      <li className="cards__item c5">
        <div>
          <Link className="cards__item__link" to={props.path}>
            <img src={p4} className="svgitems" />
          </Link>
        </div>
      </li>
      <li className="cards__item c6">
        <div>
          <Link className="cards__item__link" to={props.path}>
            <img src={p5} className="svgitems" />
          </Link>
        </div>
      </li>
      <li className="cards__item c7">
        <div>
          <Link className="cards__item__link" to={props.path}>
            <img src={p6} className="svgitems" />
          </Link>
        </div>
      </li>
    </>
  );
}
export const NavMenu = Styled.ul`
display: flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:-22px;
@media screen and (max-width:768px)
{
    display:none;
}
`;
export const NavItems = Styled.li`
height:80px;

`;
export const NavLinks = Styled(LinkR)`

position: absolute;
width: 80px;
height: 26px;
left: 1160px;
// top: 2641px;

/* Body / Normal - Regular */

font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
/* identical to box height, or 162% */


/* green */

color: #87C405;
// top: 44px;
border-radius: nullpx;

&.active{
    border-bottom:3px solid #01bf71;
}

`;
export default CardItem;
