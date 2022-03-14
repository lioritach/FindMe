import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import { useFetch } from "../../components/hooks/useFetch";
import Spinner from "../../components/Spinner/Spinner";
import Location from "../../images/location.png";
import NotFound from "../NotFound/NotFound";

import "./Places.css";

const Places = ({ title, types, userCorrdinates }) => {
  useFetch(title, userCorrdinates, types);
  const [wait, setWait] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWait(true);
      JSON.parse(localStorage.getItem(types));
    }, 2000);
    setWait(false);
  }, [types]);
  let data = JSON.parse(localStorage.getItem(types));

  if (!wait) {
    return (
      <>
        <Spinner />
        <h3 className="places-container">טוען מקומות</h3>
      </>
    );
  }

  return (
    <div className="places-container">
      {data?.length ? (
        data.map((item) => (
          <Cards
            key={item.id}
            phone={item.phone}
            name={item.name}
            website={item.website}
            img={Location}
            coordinates={item.location}
            userCorrdinates={userCorrdinates}
          />
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Places;
