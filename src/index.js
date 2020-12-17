import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
import 'jquery';
import 'popper.js';
import 'bootstrap';


function SimpleCounter(props){
    return (<div className="bigCounter">
        <div className="calendar"><i className="far fa-clock"></i></div>
        <div className="five">{props.digitFive}</div>
        <div className="four">{props.digitFour}</div>
        <div className="three">{props.digitThree}</div>
        <div className="two">{props.digitTwo}</div>
        <div className="one">{props.digitOne}</div>
    </div>);
}

let counter = 0;
setInterval(function(){
    const four = math.floor(counter = 1000)
    const three = math.floor(counter = 100)
    const two = math.floor(counter = 10)
    const one = math.floor(counter = 1)
    console.log(one, two, three, four)

})

ReactDOM.render(<SimpleCounter show={true} />, document.querySelector("#root"));
<SimpleCounter />