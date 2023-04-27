import React from "react";

export default function Line({ item }) {
  return (
    <div
      className="line"
      onClick={() => {
        navigator.clipboard.writeText(item.symbol);
      }}
    >
      <div>
        <p>{item.symbol}</p>
        <p>{item.title}</p>
      </div>
      <div>
        <p>Click to copy !</p>
      </div>
    </div>
  );
}
