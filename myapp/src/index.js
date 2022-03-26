import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {useState} from 'react';
import reportWebVitals from './reportWebVitals';

// function Example(){
//   const [number, setState] = useState(0);
//   const [bgColor, setBgColor] = useState('lightblue')

//   const add = () =>{
//     setState (number + 1)
//     setBgColor("green")
//   }


//   const substract = () =>{
//     setState (number - 1)
//     setBgColor("violet")
//   }

  

//   return (
//     <div style={{display:"flex", justifyContent: "center", alignItems: "center",
//      height: "100vh", color: 'green', backgroundColor: bgColor  }}>
//        <button onClick={substract}></button>
//        <span>{number}</span>
//        <button onClick={add}></button>
//        </div>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
