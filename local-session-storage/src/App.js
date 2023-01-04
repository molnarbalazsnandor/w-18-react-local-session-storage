import React, { useState, useEffect } from "react";
import "./App.css";
import Beer from "./components/Beer";

function App() {
  const [beers, setBeers] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setBeers([
      {
        name: "Sörös sör",
        id: 34,
      },
      {
        name: "Világos sör",
        id: 19,
      },
      {
        name: "Sötét sör",
        id: 82,
      },
      {
        name: "Kék sör",
        id: 63,
      },
      {
        name: "Bor sör",
        id: 242,
      },
    ]);
  }, []);

  useEffect(() => {
    const favoritesItem = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesItem) {
      setFavorites(favoritesItem);
    }
  }, []);

  console.log(favorites);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  return (
    <div className="App">
      {beers.length > 0
        ? beers.map((beer, i) => (
            <Beer
              name={beer.name}
              id={beer.id}
              key={i}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))
        : "not here"}
    </div>
  );
}
export default App;
