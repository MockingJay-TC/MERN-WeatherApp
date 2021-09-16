import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setEmail, setPassword } from "../features/userSlice";
import { FcBusinessman } from "react-icons/fc";
import { AiTwotoneLock } from "react-icons/ai";

const Login = () => {
  // const [isPending, setIsPending] = useState(true);

  const dispatch = useDispatch();

  const validate = (data) => {
    // Validate data entered
    if (data.email === "" || data.password === "") {
      return false;
    }
    return true;
  };
  const userState = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: userState.email,
      password: userState.password,
    };
    if (validate(data)) {
      dispatch(login(data));
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
            onChange={(e) => dispatch(setEmail(e.target.value))}
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
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
        </div>
        <button className="submit__button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
