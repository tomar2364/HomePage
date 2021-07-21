import React from 'react'
import Bg2 from './Bg2.svg'
import {heading, position,p1,Btn,BtnLink} from './indexElement.js'
const screen = () => {
    return (
        <>
           <div>
               <div>
               <img src={Bg2} style={position} alt="background"/>
               <Btn>
                <BtnLink to="/sign.in">SIGN UP NOW</BtnLink>
                </Btn>
               </div>
               
            </div> 
        </>
    )
}

export default screen
