import React from "react";

const CardInfo = props => {
  return (
    <div className="cardInfo">
      <div className="cardInfo-container">
        <img src={props.image} className="cardInfo-img" alt={props.altText} />
        <button
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cardInfo-btn"
        >
          Learn about {props.city}
        </button>
      </div>
      <h3>{props.city} City</h3>
    </div>
  );
};

export default CardInfo;
