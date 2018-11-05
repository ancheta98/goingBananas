import React from "react";

const userInputDays = props => {
  return (
    <div className="input">
      <input type="number" onChange={props.changed} value={props.currentContent}/>
    </div>
  );
};

export default userInputDays;
