import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { AddIcon, Search2Icon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import {
  addContactOnServer,
  getAllContacts,
  updateContactOnServer,
  deleteContactOnServer,
} from "./network";
import bell from "./images/bell.svg";
import HeroSection from "./components/Hero";
import { Heading, Flex, Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer.js";
import ContactCard from "./components/ContactCard";
import ContactForm from "./components/ContactForm";
import Kmodal from "./components/Kmodal";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar/index.js";
import "./components/Hero/Cards.css";
import CardItem from "./components/Hero/CardItem";
import feed from "./images/feed.svg";
const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(process.env.REACT_APP_SERVER);
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const [searchData, setSearchData] = useState("");
  const [contacts, setContacts] = useState([
    {
      name: "contact1",
      email: "",
      id: "1",
    },
  ]);
  const [contactId, setContactId] = useState();

  useEffect(() => {
    const fetchContacts = async () => {
      const data = await getAllContacts();
      const tempArray = [];

      if (data !== null) {
        Object.entries(data).forEach(([key, value]) => {
          tempArray.push({ id: key, name: value.name, email: value.email });
        });
      }

      setContacts(tempArray);
    };
    fetchContacts();
  }, []);

  const addNewContact = async (name, email) => {
    if (
      contacts.findIndex((contact) => contact.email === email) === -1 &&
      email !== ""
    ) {
      const data = await addContactOnServer(name, email);
      console.log(data);
      setContacts([...contacts, { name, email, id: data.name }]);
    }
  };

  let searchContacts = contacts.filter((contact) =>
    contact.name.includes(searchData)
  );

  const getContactId = (id) => {
    setContactId(id);
  };

  const updateContact = async (name, email, id) => {
    const data = await updateContactOnServer(name, email, id);

    setContacts((prev) => [
      ...contacts.filter((contact) => contact.id !== id),
      { name: data.name, email: data.email, id },
    ]);
  };

  const deleteContact = async (id) => {
    const data = await deleteContactOnServer(id);
    if (data === null) {
      setContacts((prev) => [
        ...contacts.filter((contact) => contact.id !== id),
      ]);
    }
  };
  let selectContact = contacts.find((contact) => contact.id === contactId);

  return (
    <>
      <Kmodal
        isOpen={isOpen}
        title={"Add Playlist"}
        onOpen={onOpen}
        onClose={onClose}
      >
        <ContactForm addNewContact={addNewContact} onClose={onClose} />
      </Kmodal>
      <Kmodal
        isOpen={isOpenEdit}
        title={"Update Playlist"}
        onOpen={onOpenEdit}
        onClose={onCloseEdit}
      >
        <ContactForm
          updateContact={updateContact}
          contact={selectContact}
          onClose={onCloseEdit}
        />
      </Kmodal>
      <div p="4">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
            left="350px"
            top="30px"
          />
          <Input
            focusBorderColor="purple.400"
            type="tel"
            placeholder="What do you want to Discover?"
            border="1px solid #E0E0E0"
            box-sizing="border-box"
            border-radius="4px"
            height="40px"
            width="278px"
            left="350px"
            position="absolute"
            top="30px"
            onChange={(e) => setSearchData(e.target.value)}
          />

          <Navbar />
          <img src={bell} className="user_icon" />
        </InputGroup>
      </div>
      <Box zindex={100}>
        <Box p="4">
          <ul className="cards__it card">
            <div className="menu cards1">
              <CardItem to="/" />
            </div>
          </ul>
        </Box>
        <Box p="4">
          <Button
            color="white"
            onClick={onOpen}
            position="absolute"
            left="10%"
            width="250px"
            top="600px"
            color="#ffffff"
            background="#87c405"
            border-radius="7px"
          >
            Create New PlayList
          </Button>
          <Button
            color="white"
            position="absolute"
            left="10%"
            width="250px"
            top="650px"
            color="#ffffff"
            background="#4B3C99"
            border-radius="7px"
          >
            Export / Download PlayList
          </Button>

          {/* <Btn>
            <BtnLink
              className="import"
              onClick={onOpen}
              position="absolute"
              left="8.82%"
              right="72.99%"
              top="800px"
              
              color="#ffffff"
            
              background="#87c405"
              border-radius="7px"
            >
              Create New PlayList
            </BtnLink>
          </Btn> */}
        </Box>
        <Box p="4">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.300" />}
              left="380px"
            />
            <Input
              focusBorderColor="purple.400"
              type="tel"
              placeholder="Search..."
              width="620px"
              background="#F6F6F6"
              border-radius="100px"
              left="380px"
              onChange={(e) => setSearchData(e.target.value)}
            />
          </InputGroup>
        </Box>
        <Box p="4">
          {searchContacts.map((contact) => (
            <ContactCard
              getContactId={getContactId}
              onOpen={onOpenEdit}
              contact={contact}
              key={contact.id}
              deleteContact={deleteContact}
            />
          ))}
        </Box>
        {/* <HeroSection /> */}
        <Box>
          <Button
            color="white"
            position="absolute"
            left="79%"
            width="250px"
            top="150px"
            color="#ffffff"
            background="#87c405"
            border-radius="7px"
          >
            Importort / Upload PlayList
          </Button>
          <div className="feed">
            <img src={feed} />
          </div>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default App;
