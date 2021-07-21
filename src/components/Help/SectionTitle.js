import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
position: absolute;
width: 614px;
height: 187px;
left: 431px;
top: 2070px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 60px;
text-align: center;

  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({
  subheading = '',
  heading = '',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}