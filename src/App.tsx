import React from 'react';
import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <h1>Learn React TypeScript</h1>
      <h2>User Registration</h2>
      <User user={"Rimi"} age={25} isRegistered={true} />
      <User user={"Sazid"} age={26} isRegistered={false} />
    </div>
  );
}

export default App;
