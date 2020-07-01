import React from "react";
import styles from "./text.module.css";

function Text({ value, style = "default" }) {
  const css = {
    default: "is-size-6",
    h1: "is-size-1 is-family-monospace",
    h2: "is-size-2 is-family-sans-serif",
    h3: "is-size-3",
    kpi: "is-size-4 has-text-weight-semibold",
    code: "is-family-code",
  };

  return (
    <div className={`${styles[style]} ${css[style]}`}>
      <span>{value}</span>
    </div>
  );
}

export default Text;
