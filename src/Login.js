import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
      const [error, setError] = useState(""); 
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);
  const navigate = useNavigate();

 async function Login_user() {
  const Items = { email, password };
  setError(""); // reset error

  try {
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Items),
    });

    const result = await response.json();

    if (response.ok && result.status === true) {
      localStorage.setItem("user-info", JSON.stringify(result.user));
      navigate("/add");
    } else {
      setError(result.message || "Login failed");
    }
  } catch (err) {
    console.error("Login Error:", err);
    setError("Something went wrong. Please try again.");
  }
}



  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        

        <h1>Login Page</h1>
        <input
          type="text"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="form-control"
          placeholder="enter your email"
        />
        <br></br>
        <input
          type="text"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="form-control"
          placeholder="enter your password"
        />
        <br></br>

        <button className="btn btn-primary" onClick={Login_user}>Login</button>
      </div>
    </div>
  );
}
export default Login;
