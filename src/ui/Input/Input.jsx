import React from "react";
import cl from "./Input.module.css";

export default function Input({ children, hint, type }) {
  return (
    <div>
      <label>{hint}</label> <br />
      <input type={type} className={cl.input} />
    </div>
  );
}
