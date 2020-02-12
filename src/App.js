import React, { useState } from "react";
import Switch from "./components/Switch";
import "./App.css";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [switch4, setSwitch4] = useState(false);

  return (
    <div className="wrapper">
      <div className="message">Ready to GO ! </div>

      <div className="btn-case">
        <Switch value={switch1} onSwitch={setSwitch1} />
        <Switch value={switch2} onSwitch={setSwitch2} />
        <Switch value={switch3} onSwitch={setSwitch3} />
        <Switch value={switch4} onSwitch={setSwitch4} />
      </div>
      <div
        className={
          switch1 === true &&
          switch2 === true &&
          switch3 === true &&
          switch4 === true
            ? "green"
            : "red"
        }
      >
        STATUT
      </div>
    </div>
  );
};

export default App;
