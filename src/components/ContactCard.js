import { Box, Flex, Stack, Text } from "@chakra-ui/layout";

import { faEdit, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import styled from "styled-components";
import { IconContext } from "react-icons";
import Positive from "./plus.svg";
import negative from "./minus.svg";
import share from "./share.svg";
import add from "./add.svg";
import more from "./more.svg";
const Data = [
  {
    head: "Information Architecture: Creating a Solid Foundation",
    content:
      "It is probably the dream of any amateur astronomer to be able to be the boss of one of the great multi million dollar telescopes even if it was just.It is probably the dream of any amateur astronomer to be able to be the boss of one of the great multi million dollar telescopes even",
  },
];
const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  // height: 100vh;
  background: #fff;
  width: 620px;
  left: 380px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 620px;
  // min-height: 600px;
  background: #161a2b;
  text-align: center;
  // margin: 128px auto;
  border-radius: 10px;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);

  position: relative;
  // background: #ffffff;
  /* grey / shade 05 */
  color: black;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 12px 12px 0px 0px;
  h1 {
    color: black;
    font-size: 5px;
  }
`;

const Wrap = styled.div`
  background: white;
  color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 620px;

  text-align: center;
  cursor: pointer;
  background: #fbfbfb;
  /* grey / shade 05 */

  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }

  span {
    margin-right: 1rem;
  }

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  /* or 26px */

  display: flex;
  align-items: center;
  letter-spacing: 0.01em;

  /* grey / shade 02 */

  color: #615a63;
`;

const Dropdown = styled.div`
  background: white;
  color: black;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;

  p {
    font-size: 1rem;
  }

  /* or 154% */

  color: #a3a3a3;
`;

const ContactCard = ({
  props,
  contact,
  onOpen,
  getContactId,
  deleteContact,
}) => {
  const updateHandler = (id) => {
    getContactId(id);
    onOpen();
  };

  const deleteContactHandler = (id) => {
    deleteContact(id);
  };
  const [clicked, setClicked] = useState(false);
  // this.setState((prevState) => ({
  //   Data: [...prevState.Data, { head: contact.name, content: contact.email }],
  // }));
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
                  <Flex align="center">
                    <Box>
                      {clicked === index ? (
                        <img src={negative} />
                      ) : (
                        <img src={Positive} />
                      )}
                    </Box>
                  </Flex>
                  <h1>{item.head}</h1>
                  <Flex>
                    <Box>
                      <img src={share} />
                    </Box>
                    <Box>
                      <img src={add} />
                    </Box>
                    <Box>
                      <img
                        src={more}
                        onClick={() => deleteContactHandler(contact.id)}
                      />
                    </Box>
                    {/* 
                    //these 2 used to add and delete the playlist
                    <Box mr="4" onClick={() => updateHandler(contact.id)}>
                      edit
                    </Box>
                    <Box
                      color="red.300"
                      onClick={() => deleteContactHandler(contact.id)}
                    >
                      delete
                    </Box> */}
                  </Flex>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.content}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );

  // return (

  // <Flex
  //   color="white"
  //   justify="space-between"
  //   bg="purple.600"
  //   p="4"
  //   borderRadius="xl"
  //   boxShadow="xl"
  //   mb="4"
  // >
  //   <Link to={`/contact/${contact.id}`}>
  //     <Flex align="center">
  //       <Box mr="4">
  //         <FontAwesomeIcon size="3x" icon={faUser} mr="4" />
  //       </Box>
  //       <Stack>
  //         <Text>{contact.name}</Text>
  //         <Text>{contact.email}</Text>
  //       </Stack>
  //     </Flex>
  //   </Link>

  //   <Flex align="center">
  //     <Box mr="4" onClick={() => updateHandler(contact.id)}>
  //       <FontAwesomeIcon size="2x" icon={faEdit} />
  //     </Box>
  //     <Box color="red.300" onClick={() => deleteContactHandler(contact.id)}>
  //       <FontAwesomeIcon size="2x" icon={faTrash} />
  //     </Box>
  //   </Flex>
  // </Flex>
  // );
};

export default ContactCard;
