import Styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const HeroContainer = Styled.div`
// position: absolute;

  // add before style
`;
export const HeroBg = Styled.div`
position:absolute;
// top:0;
// right:0;


// left:0;
width:100%;
height:100%;
overflow:hidden;
`;
export const imageBg = Styled.image`
// width:100%;
// height:100%;
// -o-object-fit:cover;
// object-fit:cover;
// background:#232a34;
`;
export const Btn = Styled.nav`
    display:flex;
    align-items:center;
    z-index: 10;
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
padding: 15px 30px;
height:15px;
width:250px;


/* green */

// background: #87C405;
border-radius: 13px;


&:hover{
    transition:all 0.2s ease-in-out;
    background:green;
    color:white;
}
`;
