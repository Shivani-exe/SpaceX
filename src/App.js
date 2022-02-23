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
      <div className="container container-center">
        <div className="heading">Space-X Rockets Encyclopedia</div>
        <div className="heading inside">
          Have you ever seen the biggest rockets built by Elon Musk's Company
          SpaceX?
        </div>
        <div className="heading inside">You can see it now!!</div>

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
    </div>
  );
}
