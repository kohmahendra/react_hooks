import React, { useState, useEffect } from "react";
import axios from "axios";
const UseEffectHookExample = () => {
  console.log(
    "you will see useEffect running twice on page load, this is only for development  build, but for production build you see only once"
  );
  useEffect(() => {
    console.log("runs every time  state changes");
  });

  useEffect(() => {
    console.log("runs only once during initial page render");
  }, []);

  let [value, setValue] = useState("N");
  useEffect(() => {
    console.log("runs on initial render and also if value changes");
  }, [value]);

  let [housing, setHousing] = useState([]);
  let [load, setLoad] = useState(false);

  const generate = async () => {
    if (load === true) {
      setHousing([]);
      await axios({
        url: "http://localhost:5000/housing",
        method: "GET",
      })
        .then((response) => {
          setTimeout(() => {
            console.log("timeout done!");
            setHousing(response.data);
          }, 2000);
        })
        .catch((err) => {});

      console.log("loading.....");
    } else {
      setHousing([]);
    }
  };

  useEffect(() => {
    generate();
  }, [load]);
  return (
    <div>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => setLoad((load = !load))}
      >
        Search
      </button>

      <table className="table w-25">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Price</th>
            <th scope="col">Area</th>
          </tr>
        </thead>
        <tbody>
          {housing.map((house, index) => {
            return (
              <tr key={index}>
                <td>{house.id}</td>
                <td>{house.price}</td>
                <td>{house.area}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UseEffectHookExample;
