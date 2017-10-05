import React from 'react';
import styled from 'styled-components';

export default ({ contact }) => {
  const ContactComponent = contact.gender === 'female'
    ? ContactFemale
    : ContactMale;

  return (
    <ContactComponent>
      <ContactName>{contact.name}</ContactName>
      <ContactIntro>
        {contact.name} is a <strong>{contact.age} years</strong> old
        <strong> {contact.introduction}</strong>
      </ContactIntro>
    </ContactComponent>
  );
};

const Contact = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  padding: 15px;
  margin: 15px;
  color: white;
`;

const ContactMale = Contact.extend`
  background-color: green;
`;

const ContactFemale = Contact.extend`
  background-color: tomato;
`;

const ContactName = styled.h2`
  font-size: 20px;
  margin-top: 0;
`;

const ContactIntro = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  strong {
    font-weight: 600;
  }
`;
