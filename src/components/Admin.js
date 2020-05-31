import React from 'react';
import './App.css';
import CurrOrders from './CurrOrders';

async function aYesclick(){
    let bod = { name: "Strawberry", bool: true };
    const response = await fetch("http://localhost:3001/updateAvail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bod),
    });
}
async function aNoclick(){
    let bod = { name: "Strawberry", bool: false };
    const response = await fetch("http://localhost:3001/updateAvail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bod),
    });
}
async function bYesclick(){
    let bod = { name: "Corn", bool: true };
    const response = await fetch("http://localhost:3001/updateAvail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bod),
    });
}
async function bNoclick(){
    let bod = { name: "Corn", bool: false };
    const response = await fetch("http://localhost:3001/updateAvail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bod),
    });
}

async function cYesclick(){
    let bod = { name: "Squash", bool: true };
    const response = await fetch("http://localhost:3001/updateAvail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bod),
    });
}
async function cNoclick(){
    let bod = { name: "Squash", bool: false };
    const response = await fetch("http://localhost:3001/updateAvail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bod),
    });
}
async function dYesclick(){
    console.log("Ayes");
}
async function dNoclick(){
    console.log("Ano");
}
async function eYesclick(){
    console.log("Ayes");
}
async function eNoclick(){
    console.log("Ano");
}
async function fYesclick(){
    console.log("Ayes");
}
async function fNoclick(){
    console.log("Ano");
}

function Admin() {
  return (
    <div className="App">
      <p>Select available produce below. Click update when finished</p>
      <ul>
            <li>Strawberry 
                <button onClick = {aYesclick}>Yes</button>
                <button onClick = {aNoclick}>No</button>
            </li>
            <li>Corn 
                <button onClick = {bYesclick}>Yes</button>
                <button onClick = {bNoclick}>No</button>
            </li>
            <li>Squash 
                <button onClick = {cYesclick}>Yes</button>
                <button onClick = {cNoclick}>No</button>
            </li>
            <li>4 
                <button onClick = {dYesclick}>Yes</button>
                <button onClick = {dNoclick}>No</button>
            </li>
            <li>5 
                <button onClick = {eYesclick}>Yes</button>
                <button onClick = {eNoclick}>No</button>
            </li>
            <li>6 
                <button onClick = {fYesclick}>Yes</button>
                <button onClick = {fNoclick}>No</button>
            </li>
        </ul>
        <CurrOrders></CurrOrders>
    </div>
  );
}

export default Admin;