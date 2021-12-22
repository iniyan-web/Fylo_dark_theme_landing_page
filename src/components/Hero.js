import React from "react";
import Header from "./Header";
import heroImg from "../images/illustration-intro.png";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <Header />
        <img
          className="hero__img"
          src={heroImg}
          alt="Fylo product illustration."
        />
        <h1 className="hero__title">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="hero__info">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="btn btn--hero">Get Started</button>
      </section>
    </>
  );
};

export default Hero;
