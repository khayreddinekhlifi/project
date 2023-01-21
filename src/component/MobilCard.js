import React from "react";

export default function MobilCard({ mobil }) {
  return (
  <div className="mobil-liste">
    <div className="liste">
      <img src={mobil.image} alt=""/>
      <h1>{mobil.type}</h1>
      <h1>{mobil.prix}</h1>
      <p>{mobil.description}</p>
    </div> 
    </div>
  );
}
