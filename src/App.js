import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const contacts = [
  { name: 'Lucy', gender: 'male', age: 30, introduction: 'developer' },
  { name: 'Lily', gender: 'female', age: 28, introduction: 'painter' },
  { name: 'Lilei', gender: 'male', age: 35, introduction: 'English teacher' },
  { name: 'John', gender: 'female', age: 24, introduction: 'web designer' },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {contacts.map(this.renderContact)}
      </div>
    );
  }

  renderContact(contact) {
    return (
      <Contact gender={contact.gender}>
        <ContactName>{contact.name}</ContactName>
        <ContactIntro>
          {contact.name} is a <strong>{contact.age} years</strong> old
          <strong> {contact.introduction}</strong>
        </ContactIntro>
      </Contact>
    );
  }
}

const Contact = styled.div`
  border: 1px solid #DEDEDE;
  border-radius: 5px;
  padding: 15px;
  margin: 15px;
  background-color: ${props => (props.gender === 'female' ? 'tomato' : 'green')};
  color: white;
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

export default App;
