import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import icon from "../../images/icon.png";

const Home = ({ title }) => {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          <span>FindMe!</span>
        </h1>
        <span>מצאו את המקומות הקרובים אליכם</span>
        <p className="description">בחרו את הקטגוריה הרצויה</p>
        <div className="grid">
          {title?.titles?.map((item, id) => (
            <div className="card" key={id}>
              <Link to={item.path}>
                <h2>{item.title} &larr;</h2>
                <p>מצאו את {item.title} הקרובים אליכם</p>
                <img src={icon} alt="" className="img" />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
