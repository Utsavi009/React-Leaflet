import React, { useState } from "react";
import "./styles.css";
import MyTabs from "./Tabs";

export default function App() {
  const [location, setLocation] = useState([
    {
      id: 1,
      name: "London",
      lng: 51.5074,
      lat: 0.1278
    },
    {
      id: 2,
      name: "Paris",
      lng: 48.8566,
      lat: 2.3522
    },
    {
      id: 3,
      name: "Berlin",
      lng: 52.52,
      lat: 13.405
    },
    {
      id: 4,
      name: "Surat",
      lng: 21.1702,
      lat: 72.8311
    }
  ]);

  return (
    <div className="App">
      <div className="block">
        In this exercise you will have to:
        <ul>
          <li>
            Create a file <b>Tabs.js</b>
          </li>
          <li>
            In this file, create tabs with{" "}
            <b>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/reactjs/react-tabs"
              >
                react-tabs
              </a>
            </b>
          </li>
          <li>
            Create a file <b>MyMap.js</b>
          </li>
          <li>
            In this file create a map with{" "}
            <b>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://react-leaflet.js.org/"
              >
                React Leafleft
              </a>
            </b>
          </li>
          <li>
            You component MyMap should have two properties <b>lng</b> and{" "}
            <b>lat</b>
          </li>
          <li>Import these two components down below </li>
        </ul>
      </div>
      <div className="block">
        Import your components here
        <MyTabs location={location} />
      </div>
    </div>
  );
}
