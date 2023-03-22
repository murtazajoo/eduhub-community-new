import React from "react";
import { Bell } from "react-feather";

export default function Header() {
  return (
    <header>
      <div className="container display-header text-center flex-column d-flex justify-content-center align-items-center ">
        <h1>
          <span className="name-one name">Eduhub</span>
          <span className="name-two name"> community </span>
        </h1>
        <p className="text-muted ">
          A community of developers, designers, and entrepreneurs.
        </p>
        <p className="my-5">
          <button className="btn btn-light  border border-info border-2">
            <Bell color="#333" /> Join Discord
          </button>
          <span className="px-3 "></span>
          <button className="btn colored-btn text-light  px-4 ">
            Latest Events
          </button>
        </p>
      </div>
    </header>
  );
}
