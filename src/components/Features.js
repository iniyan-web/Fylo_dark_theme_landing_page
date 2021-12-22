import React from "react";
import FeatureCard from "./FeatureCard";
import featureCardData from "../featureCardData";

const Features = () => {
  const displayFeatureCard = () => {
    const data = featureCardData;
    return data.map((item) => {
      return (
        <FeatureCard
          key={item.id}
          img={item.img.imgSrc}
          heading={item.heading}
          info={item.info}
        />
      );
    });
  };
  return (
    <>
      <section className="features">{displayFeatureCard()}</section>
    </>
  );
};

export default Features;
