import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Hello from './Hello';
//import Card from './Card';
import 'tachyons';
//import { robots } from './robots';
//import Text from "./Text";
//import CardList from './CardList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <h1 className='f1'>Baron Gwa Billions</h1>
    <Hello greeting={'Hello ' + ' Peter Gwa, you will soon be a react expert'}/>
    <App /> */}
    {/* <div className='tc'>
      <Card id={robots[4].id} name={robots[4].name} username={robots[4].username} email={robots[4].email}/>
      <Card id={robots[5].id} name={robots[5].name} username={robots[5].username} email={robots[5].email}/>
      <Card id={robots[6].id} name={robots[6].name} username={robots[6].username} email={robots[6].email}/>
      <Card id={robots[7].id} name={robots[7].name} username={robots[7].username} email={robots[7].email}/>
      <Card id={robots[8].id} name={robots[8].name} username={robots[8].username} email={robots[8].email}/>
    </div> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
