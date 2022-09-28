import './App.css'
import React from 'react'
import { useState } from 'react';

let travelList =
{
  Maharashtra:
    [
      { name: "Ajanta and Ellora Caves", bestTime: "June to March" },
      { name: "Mahabeleshwar", bestTime: "October to june" },
      { name: "Lonavala", bestTime: "Throughout the year" },
      { name: "Khandala", bestTime: "Throughout the year" }
    ],

  Gujrat:
    [
      { name: "kutch", bestTime: "July to April" },
      { name: "Gir National park", bestTime: "July to April" },
      { name: "Somnath", bestTime: "Everyday" },
      { name: "Saputara", bestTime: "March to November" }
    ],
  Rajasthan:
    [
      { name: "Jaipur ", bestTime:"October to April" },
      { name: "Udaipur", bestTime:"October to April" },
      { name: "Jaisalmer",bestTime:"October to April" },
      { name: "Jodpur", bestTime:"November to February" }
    ],
  Bihar:
    [
      { name: "Bodh Gaya", bestTime: "October to March" },
      { name: "Patna", bestTime:"Throughout the year"},
      { name: "Nalanda", bestTime:" October to March" },
      { name: "Rajgir", bestTime:"October to March" }
    ]
};


function App() {
  const [travels, settTravels] = useState("Maharashtra");
  function clickTravelHandler(travelPlace) {
    settTravels(travelPlace);
  }

  return (
    <div className="App">

      <h1>Good Travel Recomendation</h1>
      <h3>This app Recommend the best travel places and best time to travel </h3>
      <div>
        {Object.keys(travelList).map(function (travelPlace) {
          return (
            <button
              onClick={() => clickTravelHandler(travelPlace)}
              className="buttonClass"
            >
              {travelPlace}
            </button>
          )
        })}

      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>

          {travelList[travels].map(function (travel) {
            return (
              <li className="listClass">
                {""}
                <div className="li-items" style={{ fontSize: "larger" }}> {travel.name} </div>
                <div style={{ fontSize: "smaller" }}> {travel.bestTime} </div>
              </li>
            )

          })}
        </ul>
      </div>
    </div>
  );
}

export default App;