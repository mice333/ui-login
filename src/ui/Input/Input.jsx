import React from "react";
import cl from "./Input.module.css";

export default function Input({ children, hint, type, onChange }) {
  return (
    <div>
      <label>{hint}</label> <br />
      <input onChange={onChange} type={type} className={cl.input} />
    </div>
  );
}
