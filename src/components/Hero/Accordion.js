import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // position: relative;
  // height: 100vh;
  // background: #fff;
`;

const Container = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: start;
  // width: 500px;
  // min-height: 600px;
  // background: #161a2b;
  // text-align: center;
  // margin: 128px auto;
  // border-radius: 10px;
  // box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);

  // position: relative;
`;

const Wrap = styled.div`
  // background: white;
  // color: black;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // width: 500px;

  // text-align: center;
  // cursor: pointer;

  // h1 {
  //   padding: 2rem;
  //   font-size: 2rem;
  // }

  // span {
  //   margin-right: 1.5rem;
  // }
`;

const Dropdown = styled.div`
  // background: white;
  // color: black;
  // width: 100%;
  // height: auto;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // border-bottom: 1px solid #00ffb9;
  // border-top: 1px solid #00ffb9;

  // p {
  //   font-size: 2rem;
  // }
`;

const Accordion = (todos) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#00FFB9" }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
