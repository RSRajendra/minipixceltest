import React, { useState, useEffect, useRef } from "react";
const Header = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <div
          style={{
            width: 200,
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Demo
        </div>
        <div className="header__content__right">
          <div className="header__content__right__profile">
            <div className="header__content__right__profile__name">
              <span
                style={{ color: "red" }}
                onClick={() => {
                  localStorage.removeItem("isAuthenticated");
                  window.location.reload();
                }}
              >
                Logout
              </span>{" "}
              Welcome Rajendra
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
