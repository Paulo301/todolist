import React, {useState} from 'react';

import Login from './components/Login';
import Todos from './components/Todos';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState("");

  const handleCurrentUser = (userId) => {
    setCurrentUser(userId);
  }

  return (
    <div className="App">
      { 
        currentUser === ""
        ?
        <Login handleCurrentUser={handleCurrentUser} />
        :
        <Todos />
      }
    </div>
  );
}

export default App;
