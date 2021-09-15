import React, { useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { AiTwotoneLock } from "react-icons/ai";
import Axios from "axios";
import { useHistory } from "react-router";

const LoginComponent = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [isPending, setIsPending] = useState(true);

  const data = {
    email: email,
    password: password,
  };
  const validate = (data) => {
    // Validate data entered
    if (data.email === "" || data.password === "") {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(data)) {
      const url = "http://localhost:4000/users/login";
      Axios.post(url, data)
        .then((res) => {
          console.log(res);
          console.log(res.status);
          if (res.status === 200) {
            history.push("/weather");
          } else {
            history.push("/");
          }
        })
        .then((err) => {
          console.log(err);
        });
    } else {
      console.log("Wrong Credientials");
    }
  };

  return (
    <div className="login__form">
      <h2 className="login__name">LOGIN</h2>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="row">
          <i>
            <FcBusinessman />
          </i>
          <input
            className="email__input"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="row">
          <i>
            <AiTwotoneLock />
          </i>
          <input
            className="password__input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="submit__button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
