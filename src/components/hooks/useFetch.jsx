import axios from "axios";
import { useEffect } from "react";

export const useFetch = (title, userCorrdinates, types) => {
  useEffect(() => {
    const fetchData = async () => {
      const localstorageCategory = JSON.parse(localStorage.getItem(types));

      if (localstorageCategory && userCorrdinates) {
        return localstorageCategory;
      }

      try {
        let options = {
          params: {
            location: userCorrdinates.toString(),
            language: "en",
          },
          headers: {
            "x-rapidapi-host": "trueway-places.p.rapidapi.com",
            "x-rapidapi-key": process.env.API_KEY,
          },
        };

        const res = await axios.get(
          `https://trueway-places.p.rapidapi.com/FindPlacesNearby`,
          options
        );

        if (types[0] === "emptytypes") {
          localStorage.setItem(
            "emptytypes",
            JSON.stringify(
              res.data.results.filter((item) => item.types.length === 0)
            )
          );
        } else {
          localStorage.setItem(
            types,
            JSON.stringify(
              res.data.results.filter((item) =>
                item.types.some((r) => types.indexOf(r) >= 0)
              )
            )
          );
        }

        const expiration = Number(new Date()) + 3600 * 1000;
        localStorage.setItem("expiration", expiration);
      } catch (err) {}
    };
    fetchData();
  }, [types, userCorrdinates]);
};
