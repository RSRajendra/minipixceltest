import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
const LoginPage = () => {
  const history = useHistory();
  const [formData, updForm] = useState({
    email: "",
    password: "",
  });

  const onLogin = (event) => {
    if (
      formData.email === "rajendrasinghrana79@gmail.com" &&
      formData.password === "admin"
    ) {
      localStorage.setItem("isAuthenticated", true);
      //   history.push("/admin");
      window.location.reload();
    } else {
      alert("Invalid credentials");
    }
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    updForm({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="login">
      <div className="login__box">
        <form className="login__box__form">
          <div className="login__box__form__inputs">
            <div className="login__box__form__inputs__username">
              <label className="login__box__form__inputs__username__label">
                Username:
              </label>

              <input
                name="email"
                id="email"
                aria-label="email field"
                value={formData.email}
                onChange={handleInputChange}
                className="login__box__form__inputs__username__input"
                required
              />
            </div>
            <div className="login__box__form__inputs__password">
              <label className="login__box__form__inputs__password__label">
                password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                aria-label="password field"
                value={formData.password}
                onChange={handleInputChange}
                className="login__box__form__inputs__password__input"
                required
              />
            </div>
          </div>
          <div className="login__box__form__buttons">
            <div className="login__box__form__buttons__checkboxtext">
              <input type="checkbox" />
              <span className="login__box__form__buttons__checkboxtext__keepmelogin">
                Keep me logged in
              </span>
            </div>
            <button
              onClick={() => onLogin()}
              className="login__box__form__buttons__loginbutton"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
