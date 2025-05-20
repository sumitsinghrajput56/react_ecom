import { useState } from "react";
import {useNavigate } from "react-router-dom";

function Register() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
const navigate = useNavigate();



  async function signUp() {
    let Items = { name, email, password };

    let result = await fetch("http://127.0.0.1:8000/api/register", {
        method:"post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(Items),
    });

    result = await result.json();
    console.log(result);
    localStorage.setItem('user-info',JSON.stringify(result));
    
navigate('/add');
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Register Sign Up Page</h1>
      <br></br>
      <input
        type="text"
        name={name}
        className="form-control"
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <input
        type="text"
        name={email}
        className="form-control"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <input
        type="text"
        name={password}
        className="form-control"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <button className="btn btn-primary" onClick={signUp}>
        Sign Up
      </button>
    </div>
  );
}
export default Register;
