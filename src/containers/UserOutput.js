import React from "react";

const useroutput = props => {
  return (
    <div className="output">
      <p>{props.content}</p>
      <p>{props.username}</p>
    </div>
  );
};

export default useroutput;