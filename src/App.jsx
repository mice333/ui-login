import { useState } from "react";
import "./App.css";
import Input from "./ui/Input/Input";
import Button from "./ui/Button/Button";

function App() {
  return (
    <>
      <h1>
        <i>Log</i>in
      </h1>
      <Input hint="Имя пользователя">Username</Input> <br />
      <br />
      <br />
      <Input hint="Пароль">Password</Input>
      <Button>Войти</Button>
    </>
  );
}

export default App;
