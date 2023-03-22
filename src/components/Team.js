import React, { useEffect } from "react";
import { ArrowRight } from "react-feather";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Team(props) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);
  const teamMembers = [
    "Aaran",
    "Aaren",
    "Aarez",
    "Aarman",
    "Aaron",
    "Aaron-James",
    "Aarron",
    "Aaryan",
    "Aaryn",
    "Aayan",
    "Aazaan",
    "Abaan",
  ];
  return (
    <>
      {teamMembers.map((member) => {
        return (
          <div className="team" data-aos="fade-up" key={member}>
            <h2>{member}</h2>
            <button className="btn border border-dark mx-2 rounded-pill">
              <ArrowRight />{" "}
            </button>
          </div>
        );
      })}
    </>
  );
}
