import React from "react";
import { Calendar, Clock, Video } from "react-feather";

export default function EventsHome(props) {
  return (
    <div className="container my-5 ">
      <div className={`card ${props["new-class"]}`} style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="text-muted m-0">
            <Calendar size={15} /> <small>20 March 2021</small>
          </p>
          <p className="text-muted m-0">
            <Clock size={15} /> <small>20:30 IST</small>
          </p>
          <p className="text-muted mx-0 my-2 badge border border-primary rounded-pill">
            <Video size={15} /> <small>virtual</small>
          </p>
        </div>
      </div>
    </div>
  );
}
