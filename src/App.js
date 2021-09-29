import React, { useState } from "react";
import "./styles.css";

var songs = {
  Pop: [
    { name: "Anyone", artist: "Justin Bieber" },
    { name: "Drivers Liscense", artist: "Olivia Rodrigo" },
    { name: "Watermelon Sugar", artist: "Harry Styles" },
    { name: "At My Worst", artist: "Pink Sweat$" },
    { name: "Dont Start Now", artist: "Dua Lipa" }
  ],
  Indie: [
    { name: "I Wish", artist: "Faime" },
    { name: "Slow Dance", artist: "Vernic" },
    { name: "Why", artist: "Zodiac Wave" },
    { name: "Run Away Fade Away", artist: "Ribhavv" },
    { name: "Take Three", artist: "Pelle" }
  ],

  Punjabi: [
    { name: "Ma Belle", artist: "AP Dillion, Amari" },
    { name: "Band Darvaza", artist: "Amrinder Gill" },
    { name: "Lover", artist: "Diljit Dosanjh" },
    { name: "Champagne", artist: "Diljit Dosanjh" },
    { name: "Into You", artist: "Tegi Pannu" }
  ],
  Rock: [
    { name: "Stairway to Heaven", artist: "Led Zepplin" },
    { name: "Bohemian Raphsody", artist: "Queen" },
    { name: "Smoke on the Water", artist: "Deep Purple" },
    { name: "Comfortably Numb", artist: "Pink Floyd" },
    { name: "Kashmir", artist: "Led Zepplin" }
  ]
};

var song = Object.keys(songs);

export default function App() {
  var [genreWanted, setGenreWanted] = useState("Pop");

  function genreClickHandler(genre) {
    setGenreWanted(genre);
  }

  return (
    <div className="App">
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
            <li key={result.name} style={{ padding: "0.5rem" }}>
              <div>{result.name} </div>
              <div style={{ fontSize: "small" }}>{result.artist} </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
