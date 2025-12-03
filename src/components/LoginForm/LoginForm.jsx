import React, { use, useState } from "react";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import cl from "./LoginForm.module.css";

export default function LoginForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function checkingLogin() {
    console.log(user);
  }

  return (
    <div className={cl.form}>
      <div className={cl.left}>
        <Button>Новенький</Button>
      </div>
      <div className={cl.right}>
        <div className={cl.header}>
          <h1>
            <i>Log</i>in
          </h1>
        </div>
        <div className={cl.inputs}>
          <Input
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            hint="Имя пользователя"
          >
            Username
          </Input>
          <Input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            hint="Пароль"
            type="password"
          >
            Password
          </Input>
        </div>
        <div>
          <Button onClick={checkingLogin}>Войти</Button>
        </div>
      </div>
    </div>
  );
}
