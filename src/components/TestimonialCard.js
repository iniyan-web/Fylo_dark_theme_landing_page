import React from "react";

const TestimonialCard = ({ text, img, name, designation }) => {
  return (
    <>
      <div className="testimonial-card">
        <p className="testimonial-card__text">{text}</p>
        <div className="testimonial-card__user">
          <img className="user__img" src={img} alt="User profile." />
          <div className="user__info">
            <p className="user__name">{name}</p>
            <p className="user__designation">{designation}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
