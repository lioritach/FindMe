import React from "react";
import "./Cards.css";
import { GiPathDistance } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { AiOutlinePhone } from "react-icons/ai";

const Cards = ({ phone, name, website = "", coordinates, userCorrdinates }) => {
  let placeCoordinates = [];

  for (let item in coordinates) {
    placeCoordinates.push(coordinates[item]);
  }
  let [lat, lon] = placeCoordinates;

  //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
  function calcCrow(latlon1, latlon2) {
    let newLatLon1 = latlon1.map(Number);
    let newLatLon2 = latlon2.map(Number);

    let lat1 = newLatLon1[0];
    let lon1 = newLatLon1[1];

    let lat2 = newLatLon2[0];
    let lon2 = newLatLon2[1];

    let R = 6371; // km
    let dLat = toRad(lat2 - lat1);
    let dLon = toRad(lon2 - lon1);
    lat1 = toRad(lat1);
    lat2 = toRad(lat2);

    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
  function toRad(Value) {
    return (Value * Math.PI) / 180;
  }

  let distance = calcCrow(placeCoordinates, userCorrdinates).toFixed(1);
  distance = distance[0] === "0" ? distance[2] + "00 מטר" : "קמ";

  return (
    <div className="card-grid">
      <div className="card-card">
        <h2 className="card-h2">
          <GoLocation /> {name}
        </h2>
        <p className="card-p">
          {website && (
            <a href={website} target="_blank" rel="noreferrer">
              <CgWebsite /> קישור לאתר
            </a>
          )}
        </p>
        {phone && (
          <p className="card-p">
            <AiOutlinePhone /> מס' טלפון: {phone}
          </p>
        )}
        <p className="card-p">
          <GiPathDistance /> במרחק של {distance}
        </p>
        <hr />
        <p className="card-p">
          <a
            className="card-a"
            href={`https://www.waze.com/he/live-map/directions?to=ll.${lat}%2C${lon}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="card-p"> נווטו דרך WAZE</p>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Cards;
