import React, { Component } from 'react';
import Contact from './components/Contact';
import PasswordInput from './components/PasswordInput';

const contacts = [
  // { name: 'Lucy', gender: 'male', age: 30, introduction: 'developer' },
  // { name: 'Lily', gender: 'female', age: 28, introduction: 'painter' },
  // { name: 'Lilei', gender: 'male', age: 35, introduction: 'English teacher' },
  // { name: 'John', gender: 'female', age: 24, introduction: 'web designer' },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {contacts.map(contact => <Contact contact={contact} />)}
        <PasswordInput name="pass1" />
        <PasswordInput name="pass2" size="2em" />
      </div>
    );
  }
}

export default App;
