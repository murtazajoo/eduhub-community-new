import React from "react";
import collabs from "./images";

export default function Contributors() {
  return (
    <div className="contributors">
      {collabs.map((image) => {
        return <img src={image} alt="" className="img-fluid" />;
      })}
    </div>
  );
}
