import Styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const Nav = Styled.nav`
  background: #fff;
  height: 80px;
//   margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 1;
  z-index: 10;
  @media screen and (max-width: {transition:0.8s all ease});
`;
export const NavbarContainer = Styled.div`
  background: #fff;
  height: 80px;
  padding: 0 24px;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
`;
export const NavLogo = Styled(LinkR)`
  
position: absolute;
left: 9.24%;
right: 80.11%;
top: 0.27%;
bottom: 98.09%;
height: 71.69493103027344px;
width: 153.41795349121094px;
left: 133px;
top: 12px;
border-radius: 0px;

`;
export const MobileIcon = Styled.div`
display:none;
@media scree and (max-width:768px)
{
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
    color:black;
}
`;
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
left: 73.26%;
right: 23.75%;
top: 1.01%;
bottom: 98.68%;

font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;

/* green */

color: #87C405;
height: 13.835439682006836px;
width: 43px;
left: 1055px;
top: 44px;
border-radius: nullpx;

&.active{
    border-bottom:3px solid #01bf71;
}

`;
export const NavBtn = Styled.nav`
    display:flex;
    align-items:center;
    colour:#fff;
    @media screen and (max-width: 768px)
    {
        display:none;
    }
`;
export const NavBtnLink = Styled(LinkR)`

height: 40px;
width: 135px;
left: 1127.5px;
top: 31px;
border-radius: 6px;
padding: 11px, 23px, 11px, 23px;

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 11px 23px;

position: absolute;


/* green */

background: #87C405;
border-radius: 6px;

&:hover{
    transition:all 0.2s ease-in-out;
    background:green;
    color:white;
}
`;
