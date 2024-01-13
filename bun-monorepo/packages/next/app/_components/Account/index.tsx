import styles from "components/Account/index.module.css";

import { ButtonEvent } from "types";

import { ChangeEvent, MouseEvent, TouchEvent, useState, useEffect, EventHandler } from "react";
import { useRouter } from "next/router";


export default function Account() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");


  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  }

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  }

  const handleLogin = async (e: ButtonEvent) => {
    e.preventDefault();

    if (!email || !password) return;

    console.log("hanlde login");


  };

  const handleRegister = async (e: ButtonEvent) => {
    e.preventDefault();

    console.log("hanlde reg");

    if (!email || !password) return;

  }

  return (
    <>
      <form className={` ${styles.form} row mtx `}>
        <input placeholder="email" onChange={onChangeEmail} />
        <input placeholder="password" onChange={onChangePassword} type="password" />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </form>
      <div className="mtx row">{notification}</div>
    </>
  );

}
