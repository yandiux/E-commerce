import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "./Form";
import './style/loginScreen.css'
import UserLogged from "./UserLogged";

const LoginScreen = () => {

  const [token, setToken] = useState('')

  const changedToken = localStorage.getItem('token')

  useEffect(() => {

    setToken(changedToken)
  }, [changedToken])

  return (
    <div className="login">
      {
        token ?
          <UserLogged />
        :
          <Form />
      }
    </div>
  );
};

export default LoginScreen;
