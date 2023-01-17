import React from 'react';
import './App.css';
// import User1 from './components/User1';
// import User2 from './components/User2';
import User3 from './components/User3';

/* 
const user2 = {
  name: 'Lamia',
  age: 18,
  email: 'lamia02@gmail.com',
  isStudent: true,
  lang: ['Bangla', 'English', 'Hindi']
}
*/

const users = [
  {
    id: 101,
    name: 'Qasem',
    age: 67,
    email: 'qqq21@gmail.com',
  },
  {
    id: 102,
    name: 'Parvez',
    age: 47,
    email: 'parv1@gmail.com',
  }
]

function App() {
  return (
    <div className="App">
      <h1>Learn React TypeScript</h1>
      <h2>User Registration</h2>
      {/* <User1 user={"Rimi"} age={25} isRegistered={true} />
      <User1 user={"Sazid"} age={26} isRegistered={false} /> */}
      {/* <User2 name={"Sazid"} age={26} isStudent={false} lang ={['Bangla', 'English']}/> */}
      {/* <User2 user = {user2}/> */}
      <User3 users = {users}/>
    </div>
  );
}

export default App;
