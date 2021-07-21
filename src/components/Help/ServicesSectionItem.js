import React from 'react';
// import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  .servicesItem{
    
  }
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
//   icon = <MdDesktopMac />,
  title = '',
  desc = "",
}) {
  return (
    <ItemStyles className="servicesItem">
      {/* <div className="servicesItem__icon">{icon}</div> */}
      <div className="servicesItem__title" >{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}