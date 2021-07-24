import React from "react";
import ContactCard from "./ContactCard";
import styled from "styled-components";
const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const list = styled.div`
    width: 50%;
  `;
  const renderContactList = props.contacts.map((contact) => {
    return (
      <list>
        <ContactCard
          contact={contact}
          clickHander={deleteConactHandler}
          key={contact.id}
        />
      </list>
    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
