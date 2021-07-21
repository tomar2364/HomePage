import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {
  
  NavMenu,
  NavItems,
  NavLinks,
  
} from "./CardItem";
function Cards() {
  return (
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__head'>
        <h1 className='heading'>Articles, events and insights for you</h1>
        <NavMenu>
            <NavItems>
              <NavLinks to="about">See more {'>'}</NavLinks>
            </NavItems>
          </NavMenu>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items card1'>
            <CardItem 
              src='images/img1.svg'
              
              
              path='/services'
            />
            
            
            <CardItem
              className='card2'
              src='images/img2.svg'
              text='Minimal Discover for inspirations '
              text1='Anthony Masional'
              
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.svg'
              text='Does productivity increase when working remotely ? '
              text1='Franck Martin'
              
              path='/services'
            />
            <CardItem
              src='images/img7.svg'
              text='Morning routine to boost your mood'
              text1='Elizabeth swan'
              
              path='/products'
            />
            <CardItem
              src='images/img5.svg'
              text='5+ tips to Discover seamless experince'
              text1='Mykola Ilschenko'
              
              path='/sign-up'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;