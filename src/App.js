import "./styles.css";
import { Fragment, useState } from "react";
import { Card } from "./components/Card";
import { Modal } from "./components/Modal";
export default function App() {
  const [rocket, setRocket] = useState(null);

  let url = "https://api.spacexdata.com/v4/rockets";
  let fetchUrl = () => {
    fetch(url)
      .then((response) => response.json())
      .then((rockets) => {
        setRocket(rockets);
      });
  };

  return (
    <div className="container">
      <div className="heading">Space-X Rockets Encyclopedia</div>
      <h1 className="heading h1">
        Have you ever seen the biggest rockets built by NASA?
      </h1>
      <h2 className="heading h2">Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchUrl}>
          Fetch Data
        </button>
        <br />
      </div>
      {rocket &&
        rocket.map((r, i) => {
          return (
            <Fragment>
              <Card r={r} />
              <Modal r={r} />
            </Fragment>
          );
        })}
    </div>
  );
}
