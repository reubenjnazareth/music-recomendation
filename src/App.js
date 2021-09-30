import React, { useState } from "react";
import "./styles.css";

var songs = {
  Pop: [
    { name: "Anyone", artist: "Justin Bieber", Rating: "5/5" },
    { name: "Drivers Liscense", artist: "Olivia Rodrigo", Rating: "5/5" },
    { name: "Watermelon Sugar", artist: "Harry Styles", Rating: "4/5" },
    { name: "At My Worst", artist: "Pink Sweat$", Rating: "3/5" },
    { name: "Dont Start Now", artist: "Dua Lipa", Rating: "3/5" }
  ],
  Indie: [
    { name: "I Wish", artist: "Faime", Rating: "4/5" },
    { name: "Slow Dance", artist: "Vernic", Rating: "4/5" },
    { name: "Why", artist: "Zodiac Wave", Rating: "3/5" },
    { name: "Run Away Fade Away", artist: "Ribhavv", Rating: "3/5" },
    { name: "Take Three", artist: "Pelle", Rating: "3/5" }
  ],

  Punjabi: [
    { name: "Ma Belle", artist: "AP Dillion, Amari", Rating: "5/5" },
    { name: "Band Darvaza", artist: "Amrinder Gill", Rating: "4/5" },
    { name: "Lover", artist: "Diljit Dosanjh", Rating: "3/5" },
    { name: "Champagne", artist: "Diljit Dosanjh", Rating: "3/5" },
    { name: "Into You", artist: "Tegi Pannu", Rating: "3/5" }
  ],
  Rock: [
    { name: "Stairway to Heaven", artist: "Led Zepplin", Rating: "5/5" },
    { name: "Bohemian Raphsody", artist: "Queen", Rating: "5/5" },
    { name: "Smoke on the Water", artist: "Deep Purple", Rating: "5/5" },
    { name: "Comfortably Numb", artist: "Pink Floyd", Rating: "5/5" },
    { name: "Kashmir", artist: "Led Zepplin", Rating: "4/5" }
  ]
};

var song = Object.keys(songs);

export default function App() {
  var [genreWanted, setGenreWanted] = useState("Pop");

  function genreClickHandler(genre) {
    setGenreWanted(genre);
  }

  return (
    <div style={{ textAlign: "center" }} className="App">
      <h1>MUSIC</h1>

      <h2>Check out my music recommendations based on different genres!</h2>

      {song.map(function (genre) {
        return (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              borderRadius: "0.6rem",
              margin: "1rem",
              background: "#1DB954",
              cursor: "pointer",
              padding: "1.1rem"
            }}
          >
            {genre}
          </button>
        );
      })}

      <hr />

      <ul>
        {songs[genreWanted].map(function (result) {
          return (
            <li
              key={result.name}
              style={{
                border: "0.5px solid",
                borderRadius: "0.6rem",
                margin: "20px",
                listStyle: "none",
                padding: "0.5rem"
              }}
            >
              <div>{result.name} </div>
              <div style={{ fontSize: "small" }}>{result.artist} </div>
              <div style={{ fontSize: "small" }}>{result.Rating} </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
