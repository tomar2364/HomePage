import React from 'react';
import { Link } from 'react-router-dom';
import Styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' >
            <img
              className='cards__item__img'
              
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <p>{props.text1}</p>
          </div>
        </Link>
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