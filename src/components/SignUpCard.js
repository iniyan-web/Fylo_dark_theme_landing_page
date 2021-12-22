import React, { useState } from "react";

const SignUpCard = () => {
  const [formInput, setFormInput] = useState("");
  const [error, setError] = useState("");
  const [errorStyle, setErrorStyle] = useState(false);

  const validateInput = (errVal) => {
    const regex =
      /^([a-zA-z0-9\+\-\_\.])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return errVal.match(regex) ? setErrorStyle(false) : setErrorStyle(true);
  };

  return (
    <>
      <div className="sign-up-card">
        <h2 className="sign-up-card__heading">Get early access today</h2>
        <p className="sign-up-card__info">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form className="sign-up-card__form">
          <input
            className="form__input"
            type="email"
            placeholder="email@example.com"
            value={formInput}
            onInput={(e) => setFormInput(e.target.value)}
          ></input>
          <button
            className="btn btn--form"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setError(formInput);
              if (error !== "") {
                validateInput(error);
              }
            }}
          >
            Get Started For Free
          </button>
          <p
            className="form__error"
            style={errorStyle ? { display: "block" } : { display: "none" }}
          >
            Please enter a valid email address
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpCard;
