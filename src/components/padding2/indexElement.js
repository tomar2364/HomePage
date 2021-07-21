import Styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const position={
    position: "absolute",
width: "1440px",
height: "467px",
left: "0px",
top: "3508px",

/* Primary/blue/500 */

background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #4B3C99"
};
export const p1={
    position:"absolute",
    width: "633px",
height: "28px",
left: "404px",
top: "1683px",

/* Body / Large - Medium */

"font-family": "Lato",
"font-style": "normal",
"font-weight": "100",
"font-size": "10px",
"line-height": "28px",
/* identical to box height, or 156% */

"text-align": "center",

color: "#FFFFFF",
};
export const heading={
    position: "static",
    width: "163px",
    height: "30px",
    left: "0px",
    top: "0px",

"font-family": "Poppins",
"font-style": "normal",
"font-weight": "bold",
"font-size": "40px",
"line-height": "60px",
"text-align": "center",

color: "#FFFFFF",

};
export const Btn = Styled.nav`
    display:flex;
    align-items:center;
    colour:#fff;
    @media screen and (max-width: 768px)
    {
        display:none;
    }
`;
export const BtnLink = Styled(LinkR)`

display: flex;
flex-direction: row;
align-items: center;
padding: 43px 114px;

position: absolute;
width: 349px;
height: 50px;
left: 270px;
top: 3812px;

/* green */

background: #87C405;

&:hover{
    transition:all 0.2s ease-in-out;
    background:green;
    color:white;
}
`;