import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Cards";
import "../assets/styles/card.css";
import "../assets/styles/search.css";

function Content() {
  const [cards, setCard] = useState([]);
  const [option, setOption] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + option)
      .then((res) => setCard(res.data.meals));
  }, [option]);

  return (
    <>
      <div className="searchContainer">
        <input
          type="search"
          placeholder="Trouver une recette..."
          onChange={(e) => setOption(e.target.value)}
        />
      </div>
      <div className="cardContainer">
        {cards &&
          cards
            .slice(0, 24)
            .map((card, index) => (
              <Card
                key={index}
                title={card.strMeal}
                origin={card.strArea}
                picture={card.strMealThumb}
                recette={card.strInstructions}
              />
            ))}
      </div>
    </>
  );
}

export default Content;
