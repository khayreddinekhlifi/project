import React from "react";
export default function Header() {
  return (
    <div className="head-pg">
      <h1>Annonces Iphone, téléphone, mobile en Tunisie</h1>
      <div className="head">
        <input type="text" placeholder="Telephone" />
        <input type="text" placeholder="tous le tunisie" />
        <input type="text" placeholder="Que cherchez vous" />
        <button>
          <img
            src="https://static.thenounproject.com/png/103487-200.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
