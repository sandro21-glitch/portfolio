import React from "react";
import { projects } from "../constants/projects";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-[98vw] max-w-maxWidth mx-auto mb-20 px-3"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
    >
      <h2 className="text-5xl font-light mb-5">Projects</h2>
      <Splide
        options={{
          arrows: false,
          pagination: false,
          autoplay: true,
          interval: 3000,
          pauseOnHover: false,
          resetProgress: true,
          rewind: true,
          gap: "15px",
          perPage: 4,
          updateOnMove: true,
          breakpoints: {
            1024: {
              perPage: 3,
            },
            767: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {projects.map((item) => {
          return (
            <SplideSlide key={item.id} className="flex items-stretch">
              <div className="w-full border border-redHover rounded-lg p-5 group cursor-pointer">
                <div className="overflow-hidden w-ful">
                  <Link to={`${item.link}`} className="w-full">
                    <h2 className="text-lg text-redHover mb-4 whitespace-nowrap">
                      {item.name}
                    </h2>
                    <img
                      src={item.image}
                      alt="img"
                      className="w-full h-[15rem] object-contain mb-4 group-hover:scale-110 transition-all ease-in duration-300"
                    />
                    <p className="mb-0">{item.comment}</p>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default Projects;
