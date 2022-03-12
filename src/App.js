import logo from './logo.svg';
import React, { Component } from "react";
import Ameur from './Ameur.JPG';
import { Player } from 'video-react';
import './App.css';
import './style.css';
function App() {
  return (
    <>
    <h1 class="titlered">Ameur Saoudi</h1>
    <br/> <br/>
    <h2>Public Picture</h2>
    <img src='Foot.JPG' alt='pic' height={500} width={800}/>
    <br/> <br/>
    <h2>SRC Picture</h2>
    <img src={Ameur} alt ='myImage' height={800} width={500}/>
    <br/> <br/>
    <h2>Video</h2>
    <video width="750" height="500" controls >
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
     </video>
    </>
 
  );
}

export default App;
