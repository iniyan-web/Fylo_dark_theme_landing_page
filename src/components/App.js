import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Aside from "./Aside";
import Testimonials from "./Testimonials";
import SignUp from "./SignUp";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Aside />
        <Testimonials />
        <SignUp />
        <Footer />
      </main>
    </>
  );
};

export default App;
