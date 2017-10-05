import React, { Component } from 'react';
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
        {contacts.map(contact => (
          <div className={`contact contact--${contact.gender}`}>
            <h2 className="contact__name">{contact.name}</h2>
            <p className="contact__intro">
              {contact.name} is a <strong>{contact.age} years</strong> old
              <strong> {contact.introduction}</strong>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
