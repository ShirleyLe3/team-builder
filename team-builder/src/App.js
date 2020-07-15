import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import styled from 'styled-components';
import Form from './Form';
import NewMember from './NewMember';



function App() {
  const [person, setPerson] = useState([
  //  // (initialFriendsList) {
  //   {
  //       name: 'Mung Bin',
  //       email: 'pleaseDoNotEmailMe@email.com',
  //       role: 'person'
  // }
]);

  return (
    <div className="App">
      <h1>Team List</h1>
      <Form person={person} setPerson={setPerson} />
      <NewMember person={person} />
    </div>

  );

 }

 export default App;

