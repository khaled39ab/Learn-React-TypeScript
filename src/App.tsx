import React from 'react';
import './App.css';
// import User1 from './components/User1';
import User2 from './components/User2';

function App() {
  return (
    <div className="App">
      <h1>Learn React TypeScript</h1>
      <h2>User Registration</h2>
      {/* <User1 user={"Rimi"} age={25} isRegistered={true} />
      <User1 user={"Sazid"} age={26} isRegistered={false} /> */}
      <User2 name={"Sazid"} age={26} isStudent={false} lang ={['Bangla', 'English']}/>
    </div>
  );
}

export default App;
