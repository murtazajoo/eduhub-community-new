import React from "react";

export default function Testimonial(props) {
  return (
    <div class="card-testimonial text-center">
      <div class="card-testimonial-img">
        <img src={props.image} alt="" className="img-fluid" />
      </div>
      <div class="card-testimonial-info ubuntu">
        <p class="text-testimonial-body">{props.body}</p>
        <p class="text-testimonial-title">{props.name}</p>
      </div>
    </div>
  );
}
