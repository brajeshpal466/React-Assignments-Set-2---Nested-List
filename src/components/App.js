import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function Town(props) {
  return (
    <div>
      <div id={props.id}>{props.name}</div>
    </div>
  )
}


function City(props){
  const [getcity, setcity] = useState(false);
  const cityclick = (e)=>{
    setcity(!getcity);
     e.stopPropagation();
  }
    return(
      <>
      <div onClick={cityclick} id={props.id}>{props.name}</div>
      {getcity && props.city.map( (tw,index) => <Town id={`town${index+1}`} name={tw.name}></Town>)}
      </>
    )
}

function States(props){
 const [getcity, setcity] = useState(false);
     const stateclick = (e)=>{
          setcity(!getcity);
          e.stopPropagation();
     }

 return (<>
   <div onClick={stateclick} id={props.id}>{props.name}</div>
   {getcity && props.city.map( (ct,index) => <City name={ct.name}  id={`city${index+1}`}city ={ct.towns}></City>)}
 </>); 
}

function App() {
  return (
    <div id="main">
    {states.map( (state,index )=>  <States city={state.cities} id={`state${index+1}`} name={state.name}></States>  )}      
    </div>
  );
}

export default App;

