import React from "react";
import "../assets/styles/card.css";

function Cards(props) {
  return (
    <div className="cardContent">
      <h2>{props.title}</h2>
      <h3>{props.origin}</h3>
      <img src={props.picture} alt={"recette " + props.title} />
      <p>{props.recette}</p>
    </div>
  );
}

export default Cards;
