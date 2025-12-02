import React from "react";
import cl from "./Input.module.css";

export default function Input({ children, hint }) {
  return (
    <>
      <label>{hint}</label> <br />
      <input className={cl.input} />
    </>
  );
}
