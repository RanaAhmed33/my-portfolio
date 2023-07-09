import React from "react";

import image1 from "../components/image/pp-10.png"
import image2 from "../components/image/pp-11.png"
import image3 from "../components/image/pp-12.png"


import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "MASTER CHEF",
      description:
        " Master-Chef is a single-page Chef-related Web application. ",
      photo: image1,
      live_link: "https://assignment-10-330dc.web.app/",
      client_side: "https://github.com/RanaAhmed33/assss-010-client",
      server_side: "https://github.com/RanaAhmed33/as-10"

    },
    {
      title: "LEARN WITH TOYS",
      description:
        "Learn-With-Toys is a single-page application.",
      photo: image2,
      live_link: "https://toys-assignment-a67ac.web.app/",
      client_side: "https://github.com/RanaAhmed33/asss-011-client",
      server_side: "https://github.com/RanaAhmed33/asssss-011-server"

    },
    {
      title: "DRAWING SCHOOL",
      description:
        "Drawing-School is a  single-page MERN stack website.",
      photo: image3,
      live_link: "https://project12-9e59d.web.app/",
      client_side: "https://github.com/RanaAhmed33/ass-012-client",
      server_side: "https://github.com/RanaAhmed33/assign-12"

    },


  ];
  console.log(projects);
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-rose-700 font-semibold text-5xl my-12">
        MY RECENT PROJECTS
      </h1>
      {/* <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p> */}
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >



              <div className="card w-full bg-base-100 shadow-xl">
                {/* <figure><img src={project.photo} alt="Shoes" /></figure> */}

                <figure>
                  <div className="relative w-full h-60 overflow-hidden">
                    <div className="h-max transition-transform duration-[3000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-15rem)] hover:duration-[5000ms]">
                      <img
                        src={project.photo}
                        alt="Your Image"
                        className="object-cover object-top w-full"
                      />
                    </div>
                  </div>
                </figure>


                <div className="card-body">
                  <p className="text-red-700 text-2xl">{project.title}</p>

                  <p>{project.description}</p>
                  <div className="card-actions justify-end">
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-outline btn-secondary">
                        LIVE
                      </button>
                    </a>
                    <a
                      href={project.client_side}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-outline btn-secondary">
                        CLIENT
                      </button>
                    </a>
                    <a
                      href={project.server_side}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-outline btn-secondary">
                        SERVER
                      </button>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
