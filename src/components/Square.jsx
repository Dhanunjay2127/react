import React from "react";

function Square(props) {
  return (
    <div onClick={props.onClick} className="square">
      <p>{props.value}</p>
    </div>
  );
}

export default Square;
