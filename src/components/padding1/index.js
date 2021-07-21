import React from 'react'
import srce from './screen.svg'
import {heading, position,p1} from './indexElement.js'
const screen = () => {
    return (
        <>
           <div>
               <div>
               <img src={srce} style={position} alt="background"/>
               <h1 style={heading}>Talk with anyone</h1>
               <p style={p1} >Meet PM from all around the world</p>
               </div>
               
            </div> 
        </>
    )
}

export default screen
