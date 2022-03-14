import React from "react";
import notfound from "../../images/notfound.png";
import pagenotfound from "../../images/404.png";

const NotFound = ({ title }) => {
  return (
    <div>
      {title ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={pagenotfound}
            alt=""
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
          />
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",

              marginTop: 10,

              lineHeight: 1.15,
              fontSize: 20,
              color: "#0070f3",
              fontWeight: "bold",
            }}
          >
            אופס .... העמוד אליו הגעתם לא קיים
          </span>
        </div>
      ) : (
        <>
          <img src={notfound} alt="" height={250} />
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 10,

              lineHeight: 1.15,
              fontSize: 20,
              color: "#0070f3",
              fontWeight: "bold",
            }}
          >
            אופס .... לא נמצאו מקומות הקרובים אליכם
          </span>
        </>
      )}
    </div>
  );
};

export default NotFound;
