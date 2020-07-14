import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';
import TeamList from './TeamList';



function App() {

  const [friends, setFriends] = useState([]
  // (initialFriendsList) {
    {
        name: 'Dan',
        email: 'dantrantheasianman@email.com', 
        role: 'always available'
  };
])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
