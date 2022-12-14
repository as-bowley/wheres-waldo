import React from "react";
import GameNotifs from "./GameNotifs";
import vaderPic from "./image/vader.jpg";
import yodaPic from "./image/yoda.jpg";
import c3poPic from "./image/c3po.jpg";
import logo from "./image/logo.png";

const Header = ({
  vader,
  yoda,
  c3po,
  gameNotification,
  gameNotificationIsShown,
  timer,
}) => {
  return (
    <div className="header">
      <img src={logo} height="100px" alt="logo" />
      <div className="header__characters">
        <img
          src={vaderPic}
          className={`header__charimg ${vader ? "found" : ""}`}
          alt="darth vader"
        />
        <img
          src={yodaPic}
          className={`header__charimg ${yoda ? "found" : ""}`}
          alt="yoda"
        />
        <img
          src={c3poPic}
          className={`header__charimg ${c3po ? "found" : ""}`}
          alt="c-3po"
        />
      </div>
      <h1 className="header__timer">Time: {timer}</h1>
      <div className="header__credits">
        <p>
          Artist:
          <a
            href="https://www.behance.net/gusmorais"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Gus Morais
          </a>
        </p>
      </div>
      {gameNotificationIsShown && (
        <GameNotifs gameNotification={gameNotification} />
      )}
    </div>
  );
};

export default Header;
