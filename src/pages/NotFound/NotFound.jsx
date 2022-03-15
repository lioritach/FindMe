import React from "react";

//components
import notfound from "../../images/notfound.png";
import pagenotfound from "../../images/404.png";

//css
import "./NotFound.css";

const NotFound = ({ title }) => {
  return (
    <div>
      {title ? (
        <div className="notfound-container">
          <img src={pagenotfound} alt="notfound-img" />
          <span className="notfound-span">
            אופס .... העמוד אליו הגעתם לא קיים
          </span>
        </div>
      ) : (
        <>
          <img src={notfound} alt="" height={250} />
          <span className="notfound-span">
            אופס .... לא נמצאו מקומות הקרובים אליכם
          </span>
        </>
      )}
    </div>
  );
};

export default NotFound;
