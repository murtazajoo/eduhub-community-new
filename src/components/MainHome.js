import React, { useEffect } from "react";
import {
  ArrowRight,
  Box,
  Briefcase,
  Code,
  Dribbble,
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
  Mail,
} from "react-feather";
// import Contributors from "./Contributors";
import EventsHome from "./EventsHome";
import Team from "./Team";

import AOS from "aos";
import "aos/dist/aos.css";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Testimonial from "./Testimonial";
export default function MainHome() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);
  return (
    <main>
      <div data-aos="fade-up" className="container text-center ">
        <p className="maker-section">1</p>
        <p className="title mb-5">About</p>
        <h2 className="text-light title-heading ubuntu mb-3">
          What Is EduHub?
        </h2>
        <p className="h6 ubuntu text-muted lh-md title-info">
          It’s a community for learners by learners. The vision of this
          community is to build an environment where people can learn, implement
          and grow together. It provides people the opportunity to work with
          peers, showcase their talent and enhance their skills by working
          in-team.
        </p>
      </div>
      <div className="container my-5">
        <div className="row">
          <div
            data-aos="fade-up-right"
            className="col-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center"
          >
            <img
              src="https://eduhub-woc-test-dev.vercel.app/assets/img/header-illu.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-12 col-lg-6 ">
            <div data-aos="fade-up-left" className="mb-5">
              <div className="icon-about">
                <Box color="white" size={24} />
              </div>
              <p className="h3 ubuntu text-light ">
                Contribute In The Open Source
              </p>
              <p className=" ubuntu text-light lh-md text-muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur qui sapiente voluptates mollitia
              </p>
            </div>
            {/*  */}
            <div data-aos="fade-up-left" className="mt-5 ">
              <div className="icon-about">
                <Briefcase color="white" size={24} />
              </div>
              <p className="h3 ubuntu text-light ">
                We help You Become an Entrepreneur
              </p>
              <p className=" ubuntu text-light lh-md text-muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur qui sapiente voluptates mollitia
              </p>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* <div className="container text-center mt-5 pt-5 ">
        <p className="maker-section">2</p>
        <p className="title mb-5">About</p>
        <h2 className="text-light title-heading ubuntu mb-3">
          What Is EduHub?
        </h2>
        <p className="h5 ubuntu text-muted lh-lg">
          It’s a community for learners by learners. The vision of this
          community is to build an environment where people can learn, implement
          and grow together. It provides people the opportunity to work with
          peers, showcase their talent and enhance their skills by working
          in-team.
        </p>
      </div> */}
      {/* <div className="container title-heading ubuntu text-light  text-center mt-5 pt-5 ">
        <h2>Our Collaborations </h2>
        <Contributors />
      </div> */}
      <div className="container-sm icons-holder " data-aos="fade-up">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-around align-items-center">
            <Facebook color="#fff" size={40} />
            <Instagram color="#fff" size={40} />
            <GitHub color="#fff" size={40} />
          </div>
          <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-around align-items-center">
            <Linkedin color="#fff" size={40} />
            <Dribbble color="#fff" size={40} />
            <Mail color="#fff" size={40} />
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="container text-center mt-5 pt-5 ">
        <p className="maker-section">2</p>
        <p className="title mb-5">Events</p>
        <h2 className="text-light title-heading ubuntu mb-3">
          Meet and Learn from industry experts LIVE for FREE
        </h2>
        <p className="title-info ubuntu text-muted lh-md">
          In Our community we offer you interactive webinars, workshops and much
          more. So, stay tuned with us and contribute in our events. Learn
          real-life skills from experts, join clubs, hangout and network with
          smart people and learn while having fun
        </p>
      </div>

      <div className="events-home ">
        {/* <EventsHome />
        <EventsHome />
        <EventsHome /> */}
        <EventsHome />
        <EventsHome new-class="middle-event" />
        <EventsHome />
      </div>
      <div className="text-center my-5 w-100 ">
        <button className="btn colored-btn mb-5 px-3 text-light ubuntu">
          All Events <ArrowRight />
        </button>
      </div>

      <div className="container text-center  " data-aos="fade-up">
        <p className="maker-section">3</p>
        <p className="title mb-5">Team</p>
        <h2 className="text-light title-heading ubuntu mb-3">
          Take a Look At the Builders of this Community
        </h2>
        <p className="h6 ubuntu text-muted lh-md title-info">
          Teamwork is the ability to work together towards a common vision. Our
          team and Mentors are experts in Open Source filed and many more tech
          stacks the team is working on
        </p>
      </div>
      <div className="container team-holder my-5">
        <Team />
      </div>
      <div className="container">
        <div className="container text-center mt-5 pt-5 ">
          <p data-aos="fade-up" className="maker-section">
            4
          </p>
          <p data-aos="fade-up" className="title mb-5">
            Testimonials
          </p>
          <h2 className="text-light title-heading ubuntu mb-3">
            What Does The Community say About EduHub?
          </h2>
          {/* <p className="title-info ubuntu text-muted lh-md">
            In Our community we offer you interactive webinars, workshops and
            much more. So, stay tuned with us and contribute in our events.
            Learn real-life skills from experts, join clubs, hangout and network
            with smart people and learn while having fun
          </p> */}
        </div>

        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: true,
            pauseOnHover: true,
            resetProgress: false,
            height: "100%",
            perPage: 1,
          }}
          hasTrack={false}
          aria-label="My Favorite Images"
        >
          <div style={{ position: "relative" }}>
            <SplideTrack>
              <SplideSlide>
                <Testimonial
                  name="Some Name"
                  body=" we offer you interactive webinars, workshops and much more. So, stay tuned with us and contribute in our events. Learn real-life skills from experts, join clubs,"
                  image="https://eduhubcommunity.tech/assets/img/testimonials/team_3.jpg"
                />
              </SplideSlide>

              <SplideSlide>
                <Testimonial
                  name="Some Name"
                  body=" we offer you interactive webinars, workshops and much more. So, stay tuned with us and contribute in our events. Learn real-life skills from experts, join clubs,"
                  image="https://eduhubcommunity.tech/assets/img/testimonials/team_3.jpg"
                />
              </SplideSlide>

              <SplideSlide>
                <Testimonial
                  name="Some Name"
                  body=" we offer you interactive webinars, workshops and much more. So, stay tuned with us and contribute in our events. Learn real-life skills from experts, join clubs,"
                  image="https://eduhubcommunity.tech/assets/img/testimonials/team_3.jpg"
                />
              </SplideSlide>

              <SplideSlide>
                <Testimonial
                  name="Some Name"
                  body=" we offer you interactive webinars, workshops and much more. So, stay tuned with us and contribute in our events. Learn real-life skills from experts, join clubs,"
                  image="https://eduhubcommunity.tech/assets/img/testimonials/team_3.jpg"
                />
              </SplideSlide>
            </SplideTrack>
          </div>
        </Splide>
      </div>
      <div className="text-center my-5 w-100 ">
        <button className="btn colored-btn mb-5 px-3 text-light ubuntu">
          Comming Soon <Code />
        </button>
      </div>
    </main>
  );
}
