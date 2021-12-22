import React from "react";
import asideImg from "../images/illustration-stay-productive.png";
import linkImg from "../images/icon-arrow.svg";

const Aside = () => {
  return (
    <>
      <section className="aside">
        <img
          className="aside__img"
          src={asideImg}
          alt="People being productive illustration."
        />
        <div className="aside__text">
          <h2 className="aside__title">Stay productive, wherever you are</h2>
          <p className="aside__info">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="aside__info">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <div className="aside__link">
            <p className="link__text">See how Fylo works</p>
            <img className="link__img" src={linkImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Aside;
