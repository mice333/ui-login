import React from "react";
import cl from "./Button.module.css";

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={cl.button}>
      {children}
    </button>
  );
}
