import React from "react";

function Beer({name,id, favorites, setFavorites}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{id}</h2>
      <button
        onClick={()=>{
          setFavorites([...favorites, id])
        }}
      >Add to favorite</button>
    </div>
  )
}

export default Beer