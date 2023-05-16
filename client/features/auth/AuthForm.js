import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../app/store";

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ setToggleAuthForm }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [name, setName] = useState("login");
  const [displayName, setDisplayName] = useState("Login");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    const res = await dispatch(
      authenticate({ username, password, method: formName })
    );
    if (!res.payload) {
      setToggleAuthForm(false);
    }
  };

  const changeToSignup = () => {
    setName("signup");
    setDisplayName("Sign Up");
  };

  const handleClick = (evt) => {
    evt.stopPropagation();
  };

  return (
    <div id="overlay" onClick={() => setToggleAuthForm(false)}>
      <div id="login-signup" onClick={handleClick}>
        <button onClick={() => setToggleAuthForm(false)}>X</button>
        <form onSubmit={handleSubmit} name={name}>
          <div>
            <input name="username" type="text" placeholder="Username..." />
          </div>
          <div>
            <input name="password" type="password" placeholder="Password..." />
          </div>
          <button type="submit" id="submit-btn">
            {displayName}
          </button>
          {error && name === "login" ? (
            <div id="error-message"> {error} </div>
          ) : (
            <div style={{ color: "#121212", fontSize: "1.2rem" }}>hidden</div>
          )}
        </form>
        {name === "login" && (
          <div id="have-account">
            <p>Don't have an account?</p>
            <p onClick={changeToSignup} style={{ textDecoration: "underline" }}>
              Click Here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
