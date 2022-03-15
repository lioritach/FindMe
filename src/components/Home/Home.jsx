import React from "react";
import { Link } from "react-router-dom";

//images
import icon from "../../images/icon.png";

//css
import "./Home.css";

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
            <Link to={item?.path} key={id}>
              <div className="card">
                <h2>{item?.title} &larr;</h2>
                <p>מקומות הקרובים אליכם</p>
                <img src={icon} alt="" className="img" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
