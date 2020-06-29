import React from "react";

import styles from "./jumbotron.module.css";

function Jumbotron({ title, subtitle }) {
  return (
    <section className={`hero is-primary ${styles.jumbotron}`}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
