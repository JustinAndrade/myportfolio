import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  useEffect(() => {
    const front = document.querySelectorAll(".front-1, .front-2, .front-3");

    front.forEach((el) => {
      el.style.opacity = 1;
    });
    console.log(front);

    // const front1 = document.querySelector(".front-1");
    // const front2 = document.querySelector(".front-2");
    // const front3 = document.querySelector(".front-3");
    // front1.style.opacity = "1";
    // front2.style.opacity = "1";
    // front3.style.opacity = "1";
  });

  const cardSwitch = (num) => {
    const front = document.querySelector(`.front-${num}`);
    const back = document.querySelector(`.back-${num}`);
    const card = document.querySelector(`.card-${num}`);
    console.log(front, back, card);
    if (front && front.style.opacity === "1") {
      card.style.transform = "rotateY(180deg)";
      front.style.opacity = 0;
      back.style.opacity = 1;
    } else {
      console.log("else");
      card.style.transform = "rotateY(360deg)";
      front.style.opacity = 1;
      back.style.opacity = 0;
    }
  };

  return (
    <section id="projects" class="px-4 md:px-0 lg:px-0 mt-10">
      <h2 class="border-b-8 border-blue-500 text-5xl inline-block mb-6">
        Projects
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center h-full">
        {/* Card Start */}
        <Fade triggerOnce>
          <div class="md:m-8" style={{ height: "650px" }}>
            <div class="card card-1 max-w-sm rounded overflow-hidden shadow-lg min-h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              {/* <img
                class="w-full h-64"
                src="http://juscoding.com/images/myprops.png"
              /> */}

              <div class="front front-1">
                <div class="px-6 py-4 h-64">
                  <div class="flex flex-col xl:flex-row justify-center text-center xl:text xl:justify-around items-center mb-4 xl:mb-4">
                    <a
                      href="https://mypropsplus.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="block text-blue-500  font-bold text-2xl  mb-2 hover:opacity-75"
                    >
                      MyPropsPlus
                    </a>
                    <a
                      href="https://github.com/props-plus"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="rounded bg-red-500 text-xs xl:text-md text-gray-200 font-bold mt-1 py-1 px-2 h-6 hover:opacity-75"
                    >
                      See the Code
                    </a>
                  </div>
                  <div>
                    <p>
                      Slack workspace application that allows users to track
                      acknowledgements they have received or sent.
                    </p>
                    <p class="text-gray-700">
                      <ul class="list-disc px-8 text-xs md:text-base">
                        <li class="my-4 text-sm">
                          Collaborated on front end functionality, and
                          implemented styling design.
                        </li>
                        <li class="my-4 text-sm">
                          Slack API integration and Auth0 implementation.
                        </li>
                        <li class="my-4 text-sm">
                          Database structuring, and schema design.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>

                <div class="px-6 py-10 bottom-0 absolute h-64 ">
                  <p>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #Django
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #Python
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #ReactJS
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #Redux
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #SASS
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #TypeScript
                    </span>
                  </p>
                </div>
              </div>
              <div class="back back-1">Back</div>

              <svg
                onClick={() => cardSwitch("1")}
                class="arrow m-4 absolute bottom-0 right-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 12l-12-8v5h-12v6h12v5z" />
              </svg>
            </div>
          </div>
        </Fade>
        <Fade triggerOnce>
          <div class="md:m-8" style={{ height: "650px" }}>
            <div class=" card card-2 max-w-sm rounded overflow-hidden shadow-lg min-h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              {/* <img
                class="w-full h-64"
                src="http://juscoding.com/images/pic03.jpg"
              /> */}
              <div class="front front-2">
                <div class="px-6 py-4 h-64">
                  <div class="flex flex-col xl:flex-row justify-center text-center xl:text xl:justify-around items-center mb-4 xl:mb-4">
                    <a
                      href="https://thebookr.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="block text-blue-500  font-bold text-2xl  mb-2 hover:opacity-75"
                    >
                      Bookr
                    </a>
                    <a
                      href="https://github.com/the-bookr-team"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="rounded bg-red-500 text-xs xl:text-md text-gray-200 font-bold mt-1 py-1 px-2 h-6 hover:opacity-75"
                    >
                      See the Code
                    </a>
                  </div>
                  <p class="text-gray-700">
                    Book tracking application that allows users to leave
                    reviews, purchase books, and browse books.
                  </p>
                  <div>
                    <p class="text-gray-700">
                      <ul class="list-disc px-8 text-xs md:text-base">
                        <li class="my-4 text-sm">
                          Created a friendly design, that enables a great user
                          experience.
                        </li>
                        <li class="my-4 text-sm">
                          Built out the entire backend, database, and
                          authorization features.
                        </li>
                        <li class="my-4 text-sm">
                          Implemented modals and design schema based of figma UX
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>

                <div class="px-6 pb-10 bottom-0 absolute h-64 ">
                  <p>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #Bootstrap
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #Express
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #Knex
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #NodeJS
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #PostgreSQL
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #ReactJS
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #Redux
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #SASS
                    </span>
                  </p>
                </div>
              </div>
              <div class="back back-2">Back</div>
              <svg
                onClick={() => cardSwitch("2")}
                class="arrow m-4 absolute bottom-0 right-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 12l-12-8v5h-12v6h12v5z" />
              </svg>
            </div>
          </div>
        </Fade>
        <Fade triggerOnce>
          <div class="md:m-8" style={{ height: "650px" }}>
            <div class=" card card-3 max-w-sm rounded overflow-hidden shadow-lg min-h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              {/* <img
                class="w-full h-64"
                src="http://juscoding.com/images/legendoflambda.jpg"
              /> */}
              <div class="front front-3">
                <div class="px-6 py-4 h-64">
                  <div class="flex flex-col xl:flex-row justify-center text-center xl:text xl:justify-around items-center mb-4 xl:mb-4">
                    <a
                      href="https://legend-of-lambda.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="block text-blue-500  font-bold text-2xl  mb-2 hover:opacity-75"
                    >
                      Legend of Lambda
                    </a>
                    <a
                      href="https://github.com/LegendOfLambda"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="rounded bg-red-500 text-xs xl:text-md text-gray-200 font-bold mt-1 py-1 px-2 h-6 hover:opacity-75"
                    >
                      See the Code
                    </a>
                  </div>
                  <div>
                    <p>MUD based adventure game with a dungeon based system</p>
                    <p class="text-gray-700">
                      <ul class="list-disc px-8 text-xs md:text-base">
                        <li class="my-4 text-sm">
                          Completed front end application, creating the landing
                          page, and authorization for login and registration.
                        </li>
                        <li class="my-4 text-sm">
                          Utilized base level sprites for game visualization.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>

                <div class="px-6 pb-10 bottom-0 absolute h-64 ">
                  <p>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #Auth0
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #ChartJS
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #Express
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #Gatsby
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #Jest
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #Knex
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #Material-UI
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                      #Redux
                    </span>
                  </p>
                </div>
              </div>
              <div class="back back-3">Back</div>
              <svg
                onClick={() => cardSwitch("3")}
                class="arrow m-4 absolute bottom-0 right-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 12l-12-8v5h-12v6h12v5z" />
              </svg>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Projects;
