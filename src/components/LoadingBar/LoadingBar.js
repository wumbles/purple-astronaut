import React from "react";

import "./LoadingBar.css";

function LoadingBar({ hidden }) {
  return (
    <div className="loading-box">
      <div className={`loader ${hidden && "hidden"}`}></div>
    </div>
  );
}

export default LoadingBar;
