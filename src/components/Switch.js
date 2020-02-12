import React from "react";

const Switch = props => {
  return (
    <div>
      <button
        onClick={() => {
          props.onSwitch(true);
        }}
        className={props.value === true ? "enabled" : ""}
      >
        ON
      </button>
      <button
        onClick={() => {
          props.onSwitch(false);
        }}
        className={props.value === false ? "enabled" : ""}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;
