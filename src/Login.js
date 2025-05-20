import Header from "./Header";
import {useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Login() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  },[]);
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      <h1>Login Page</h1>
    </div>
  );
}
export default Login;
