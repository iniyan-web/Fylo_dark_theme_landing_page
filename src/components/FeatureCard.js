import React from "react";

const FeatureCard = ({ img, heading, info }) => {
  return (
    <>
      <div className="feature-card">
        <img
          className="feature-card__img"
          src={img}
          alt="Fylo feature illustration."
        />
        <h2 className="feature-card__heading">{heading}</h2>
        <p className="feature-card__info">{info}</p>
      </div>
    </>
  );
};

export default FeatureCard;
