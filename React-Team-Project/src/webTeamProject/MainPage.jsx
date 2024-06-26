import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <div className="main-page">
        <h1>문제풀기 도우미</h1>
        <h4>어르신들을 위한 문제</h4>
      </div>
      <div className="problem">
        <div className="btn-wrapper">
          <Link to="/sign-game">
            <button className="main-btn btn1">
              <img className="main-pic" src="./game1.png" alt="첫 번째" />
              세현님 게임
            </button>
          </Link>
        </div>
        <div className="btn-wrapper">
          <Link to="/shapes-game">
            <button className="main-btn btn2">
              <img className="main-pic" src="./game2.png" alt="두 번째" />
              지예님 게임
            </button>
          </Link>
        </div>
        <div className="btn-wrapper">
          <Link to="/another-game">
            <button className="main-btn btn3">
              <img className="main-pic" src="./game3.png" alt="세 번째" />
              태원님 게임
            </button>
          </Link>
        </div>
        <div className="btn-wrapper">
          <Link to="/coin-game">
            <button className="main-btn btn4">
              <img className="main-pic" src="./game4.png" alt="네 번째" />
              동전 갯수 맞추기 게임
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
