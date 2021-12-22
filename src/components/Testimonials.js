import React from "react";
import TestimonialCard from "./TestimonialCard";
import testimonialCardData from "../testimonialCardData";

const Testimonials = () => {
  const displayTestimonialCard = () => {
    const data = testimonialCardData;
    return data.map((item) => {
      return (
        <TestimonialCard
          key={item.id}
          text={item.text}
          img={item.img.imgSrc}
          name={item.name}
          designation={item.designation}
        />
      );
    });
  };
  return (
    <>
      <section className="testimonials">{displayTestimonialCard()}</section>
    </>
  );
};

export default Testimonials;
