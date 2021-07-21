import React from 'react';
// import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import l1 from './logo1.svg'
import l2 from './logo2.svg'
const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .c1{
    position: absolute;
width: 350px;
height: 171px;
left: 545px;
top: 2226px;

/* green */

background: #87C405;
  }
  .c2{
    position: absolute;
    width: 350px;
    height: 171px;
    left: 165px;
    top: 2226px;
    
    /* Color / White */
    
    background: #FFFFFF;
  }
  .c3{
    position: absolute;
    width: 350px;
    height: 174px;
    left: 925px;
    top: 2223px;
    
    /* Color / White */
    
    background: #FFFFFF;
  }
  .d1{
    position: absolute;
width: 48px;
height: 64px;
left: 45%;
top: 80%;

background: #FFFFFF;
transform: rotate(90deg);
  }
  .d2{
    position: absolute;
width: 48px;
height: 64px;
left: 50%;
top: 80%;

/* green */

background: #87C405;
transform: rotate(90deg);
  }
  .logo1{
    position: absolute;
left: 45%;
// right: 2%;
top: 40%;
// bottom: 35.83%;

/* green */
transform: rotate(270deg);
// background: #87C405;
  }
  .logo2{
    position: absolute;
left: 40%;
// right: 25.8%;
top: 40%;
// bottom: 35.83%;

/* green */
transform: rotate(270deg);
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="Find the answers to anything you need in our Help Center" heading="" />
        <div className="c1">
          <ServicesSectionItem
            // icon={<MdDesktopMac />}
            
            desc="How do I know if a PM is available?"
          />
          <div className="d1">
            <img src={l1} className="logo1"/>
          </div>

        </div>
        <div className="c2">
          <ServicesSectionItem
            // icon={<MdCode />}
            
            desc="How do i book a Pm Meet"
          />
          <div className="d2">
          <img src={l2} className="logo2"/>
            </div>
          </div>
          <div className="c3">
          <ServicesSectionItem
            // icon={<MdPhonelinkSetup />}
          
            desc="How do reviews Growth? "
          />
          <div className="d2">
          <img src={l2} className="logo2"/>
            </div>
        </div>
      </div>
    </ServicesItemsStyles>
  );
}