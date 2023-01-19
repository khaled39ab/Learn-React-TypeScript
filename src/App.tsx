import React from 'react';
import './App.css';
// import User1 from './components/User1';
// import User2 from './components/User2';
// import User3 from './components/User3';
// import DataFetch from './components/DataFetch';
// import Post from './components/children props/Post';
// import Price from './components/children props/Price';
// import Color from './components/style props/Color';
import HookType from './components/useState hook/HookType';

/* 
const user2 = {
  name: 'Lamia',
  age: 18,
  email: 'lamia02@gmail.com',
  isStudent: true,
  lang: ['Bangla', 'English', 'Hindi']
}
*/

/* 
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
*/

const colorStyle = {
  color: 'red',
  backgroundColor: "gray",
  padding: '0.5rem',
  margin: '3rem'
}

function App() {
  return (
    <div className="App">
      <h1>Learn React TypeScript</h1>
      {/* <h2>User Registration</h2> */}

      {/* ===================  User1 Component  =================== */}
      {/* <User1 user={"Rime"} age={25} isRegistered={true} />
      <User1 user={"Saadi"} age={26} isRegistered={false} /> */}

      {/* ===================  User2 Component  =================== */}
      {/* <User2 name={"Saadi"} age={26} isStudent={false} lang ={['Bangla', 'English']}/>  <User2 user = {user2}/> */}

      {/* ===================  User3 Component  =================== */}
      {/* <User3 users = {users}/> */}

      {/* ===================  DataFetch Component  =================== */}
      {/* <DataFetch status= {'error'}/> 
       <DataFetch status= {'loading'}/> */}

      {/* ===================  children props Component  =================== */}
      {/* <Post /> 
       <Price /> */}

      {/* ===================  style props Component  =================== */}
      {/* <Color colorStyle={{color: 'red'}} />
       <Color colorStyle={colorStyle} /> */}

      {/* ===================  hook type Component  =================== */}
      <HookType />

    </div>
  );
}

export default App;
