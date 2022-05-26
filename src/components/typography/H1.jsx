import React from "react";

function H1({ children }, props) {
  return (
    <h1
      className={`text-12xl text-center font-displayFont text-white ${
        props.classModifiers ? props.classModifiers : ""
      }`}
    >
      {children}
    </h1>
  );
}

export default H1;
