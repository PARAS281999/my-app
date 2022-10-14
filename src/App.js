import './App.css';
import porsche from "../src/images/porsche.webp"
import ferrari from "../src/images/ferrari.webp"
import { BrowserRouter, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Product from "./product";
import Slick from "./Slick"
import Sideslider from './components/Sideslider';
import Navbar from './components/Navbar';



//import { useNavigate } from "react-router-dom"

const App = () => {

  let navigate = useNavigate();

  //let navigate = useNavigate()

  function handleClick(e) {
    e.preventDefault();
    console.log('You clicked Me.');
  }


  return (
    <>
    <div>
      <Navbar />
    </div>
    <div className='container mt-5-carousel'>
      <Slick />
      </div>

      <div className='sidebar'><Sideslider /></div>

    <div className="Header">
        <div className='Images'>
          <img src={porsche} alt="Porsche"></img>
          <div className='products'>
            <p>Porsche</p>
            <button onClick={() => {
              navigate('/product');
            } } className='primary-button'>
              Click Here
            </button>
          </div>
        </div>
        <div className='Images'>
          <img id='ferrari' src={ferrari} alt="ferrari"></img>
          <div>
            <p>Ferrari</p>
            <button onClick={() => {
              navigate('/Product2');
            } } className='primary-button'>
              Click Here
            </button>
          </div>
        </div>

        <div className='Images'>
          <img id='ferrari' src={ferrari} alt="ferrari"></img>
          <div>
            <p>Ferrari</p>
            <button onClick={() => {
              navigate('/Product2');
            } } className='primary-button'>
              Click Here
            </button>
          </div>
        </div>
        <div className='Images'>
          <img src={porsche} alt="Porsche"></img>
          <div>
            <p>Porsche</p>
            <button onClick={() => {
              navigate('/product');
            } } className='primary-button'>
              Click Here
            </button>
          </div>
        </div>
        <div className='Images'>
          <img id='ferrari' src={ferrari} alt="Ferrari"></img>
          <div>
            <p>Ferrari</p>
            <button onClick={() => {
              navigate('/Product2');
            } } className='primary-button'>
              Click Here
            </button>
          </div>
        </div>
        <div className='Images'>
          <img src={porsche} alt="Porsche"></img>
          <div>
            <p>Porsche</p>
            <button onClick={() => {
              navigate('/product');
            } } className='primary-button'>
              Click Here
            </button>
          </div>
        </div>
      </div></>
  );
}

export default App;
