import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Places from "./pages/Places/Places";
import NotFound from "./pages/NotFound/NotFound";

//json
import data from "./places.json";

const App = () => {
  const [geoLocation, setGeoLocation] = useState([]);

  /** get current location of the user */
  const success = (position) => {
    let cordinates = [];
    cordinates.push(position.coords.latitude, position.coords.longitude);
    setGeoLocation(cordinates.map(String));
  };

  const error = () => {
    alert("לא הצלחנו למצוא את המיקום שלך, נא לאשר מיקום.");
  };

  useEffect(() => {
    navigator.geolocation.watchPosition(success, error);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home title={data} />} />
        {data.titles?.map((place, id) => (
          <Route
            key={id}
            path={place?.path}
            element={
              <Places
                title={place?.title}
                types={place?.types}
                userCorrdinates={geoLocation}
              />
            }
          />
        ))}
        <Route path="*" element={<NotFound title="404" />} />
      </Routes>
      <footer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <span>
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/lioritach/"
              target="_blank"
              rel="noreferrer"
            >
              Lior Itach
            </a>{" "}
          </span>
        </div>
      </footer>
    </>
  );
};

export default App;
