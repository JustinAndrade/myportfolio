import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
// Images
import PPstatic from "../assets/img/props-plus-static.png";
import BookrStatic from "../assets/img/bookr-static.png";
import LolStatic from "../assets/img/lol-static.png";
import JadeStatic from "../assets/img/jade-static.png";

const Projects = () => {
  useEffect(() => {
    const front = document.querySelectorAll(
      ".front-1, .front-2, .front-3, .front-4"
    );

    front.forEach((el) => {
      el.style.display = "block";
    });
  });

  const cardSwitch = (num) => {
    const front = document.querySelector(`.front-${num}`);
    const back = document.querySelector(`.back-${num}`);
    const card = document.querySelector(`.card-${num}`);
    console.log(front, back, card);
    if (front && front.style.display === "block") {
      card.style.transform = "rotateY(180deg)";
      front.style.display = "none";
      back.style.display = "block";
    } else {
      card.style.transform = "rotateY(360deg)";
      front.style.display = "block";
      back.style.display = "none";
    }
  };

  return (
    <section id="projects" class="px-4 md:px-0 lg:px-0 mt-10">
      <h2 class="border-b-8 border-blue-500 text-5xl inline-block mb-6">
        Projects
      </h2>
      {/* <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-center h-full"> */}
      <div class="display flex-col">
        <div class="display flex lg:my-24">
          <div class="w-100 lg:w-1/2 lg:mr-12">
            <Fade triggerOnce>
              <div class="px-2 py-4 h-32">
                <a
                  href="https://mypropsplus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block text-blue-500  font-bold text-4xl  mb-2 hover:opacity-75"
                >
                  MyPropsPlus
                </a>

                <a
                  href="https://github.com/props-plus/Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="rounded bg-red-500 text-xs text-gray-200 font-bold my-2 py-1 px-2 h-6 hover:opacity-75 w-32 text-center"
                >
                  See the Code
                </a>

                <p class="text-gray-700 text-xl mt-2">
                  Slack workspace application that allows users to track
                  acknowledgements they have received or sent.
                </p>
              </div>
              <div class="absolute bottom-0 pb-12">
                <p class="text-gray-700">
                  <ul class="list-disc text-xs ml-8">
                    <li class="my-4 text-sm">
                      Collaborated on front end functionality, and implemented
                      styling design.
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
              <div class="flex flex-col justify-center">
                <p>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #Auth0
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #ChartJS
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #Express
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #Gatsby
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #Jest
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #Knex
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #Material-UI
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #Redux
                  </span>
                </p>
              </div>
            </Fade>
          </div>
          <div class="hidden lg:inline w-1/2">
            <div
              style={{
                width: "100%",
                position: "relative",
              }}
            >
              <Fade triggerOnce delay={1000}>
                <img src={PPstatic} alt="PropsPlus preview" />
              </Fade>
              {/* <iframe
                class=" shadow-lg border-b-4 mb-4 border-blue-500"
                title="Demo of PropsPlus Website"
                src="https://giphy.com/embed/TgmsEoGLQzQuEvDVMK"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
        </div>

        <div class="display flex flex-row-reverse my-24">
          <div class="w-100 lg:w-1/2 lg:mr-12">
            <Fade triggerOnce>
              <div class="px-2 py-4 h-32">
                <a
                  href="https://thebookr.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block text-blue-500  font-bold text-4xl  mb-2 hover:opacity-75"
                >
                  Bookr
                </a>
                <div>
                  <a
                    href="https://thebookr.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="rounded bg-red-500 text-xs text-gray-200 font-bold mt-1 py-1 px-2 h-6 hover:opacity-75 w-32 text-center"
                  >
                    See the Code
                  </a>
                </div>
                <p class="text-gray-700 text-xl mt-2">
                  Book tracking application that allows users to leave reviews,
                  purchase books, and browse books.
                </p>
              </div>
              <div class="absolute bottom-0 pb-12">
                <p class="text-gray-700">
                  <ul class="list-disc text-xs ml-8">
                    <li class="my-4 text-sm">
                      Created a friendly design, that enables a great user
                      experience.
                    </li>
                    <li class="my-4 text-sm">
                      Built out the entire backend, database, and authorization
                      features.
                    </li>
                    <li class="my-4 text-sm">
                      Implemented modals and design schema based of figma UX
                    </li>
                  </ul>
                </p>
              </div>
              <div class="flex flex-col justify-center">
                <p>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #Bootstrap
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #Express
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #Knex
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #NodeJS
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #PostgreSQL
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #ReactJS
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #Redux
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #SASS
                  </span>
                </p>
              </div>
            </Fade>
          </div>
          <div class="hidden lg:inline w-1/2">
            <div
              style={{
                width: "100%",
                position: "relative",
              }}
            >
              <Fade triggerOnce delay={1000}>
                <img src={BookrStatic} alt="Bookr preview" />
              </Fade>
              {/* <iframe
                class="shadow-lg border-b-4 mb-4 border-blue-500"
                title="Demo of Bookr Website"
                src="https://giphy.com/embed/TiPUqyAtB1pxVC9LPe"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
        </div>

        <div class="display flex my-24">
          <div class="w-100 lg:w-1/2 lg:mr-12">
            <Fade triggerOnce>
              <div class="px-2 py-4 h-32">
                <a
                  href="https://legend-of-lambda.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block text-blue-500  font-bold text-4xl  mb-2 hover:opacity-75"
                >
                  Legend of Lambda
                </a>

                <a
                  href="https://github.com/LegendOfLambda/LoL-frontend/tree/master/lol-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="rounded bg-red-500 text-xs text-gray-200 font-bold my-2 py-1 px-2 h-6 hover:opacity-75 w-32 text-center"
                >
                  See the Code
                </a>

                <p class="text-gray-700 text-xl mt-2">
                  MUD based adventure game with a dungeon based system
                </p>
              </div>
              <div class="absolute bottom-0 pb-12">
                <p class="text-gray-700">
                  <ul class="list-disc text-xs ml-8">
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
              <div class="flex flex-col justify-center">
                <p>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #Django
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #Python
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #ReactJS
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #Redux
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #SASS
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #TypeScript
                  </span>
                </p>
              </div>
            </Fade>
          </div>
          <div class="hidden lg:inline w-1/2">
            <div
              style={{
                width: "100%",
                position: "relative",
              }}
            >
              <Fade triggerOnce delay={1000}>
                <img src={LolStatic} alt="Legend of Lambda preview" />
              </Fade>
              {/* <iframe
                class=" shadow-lg border-b-4 mb-4 border-blue-500"
                title="Demo of Legend of Lambda Website"
                src="https://giphy.com/embed/hSRkqjJHYKTSduawJf"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
        </div>

        <div class="display flex flex-row-reverse my-24">
          <div class="w-100 lg:w-1/2 lg:mr-12">
            <Fade triggerOnce>
              <div class="px-2 py-4 h-32">
                <a
                  href="https://jadegarden.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block text-blue-500  font-bold text-4xl mb-2 hover:opacity-75"
                >
                  Jade Garden
                </a>
                <div>
                  <a
                    href="https://github.com/JustinAndrade/ramen-shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="rounded bg-red-500 text-xs text-gray-200 font-bold mt-1 py-1 px-2 h-6 hover:opacity-75 w-32 text-center"
                  >
                    See the Code
                  </a>
                </div>
                <p class="text-gray-700 text-xl mt-2">
                  Front end application layout and design for a client who owns
                  a Ramen shop.
                </p>
              </div>
              <div class="absolute bottom-0 pb-12">
                <p class="text-gray-700">
                  <ul class="list-disc text-xs ml-8">
                    <li class="my-4 text-sm">
                      Optimized design and layout for landing page and user
                      flow.
                    </li>
                    <li class="my-4 text-sm">
                      Created custom SVG's and overlay for web application.
                    </li>
                  </ul>
                </p>
              </div>
              <div class="flex flex-col justify-center">
                <p>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #ReactJS
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #HTML
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #CSS
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #StyledComponents
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                    #Figma
                  </span>
                </p>
              </div>
            </Fade>
          </div>
          <div class="hidden lg:inline w-1/2">
            <div
              style={{
                width: "100%",
                position: "relative",
              }}
            >
              <Fade triggerOnce delay={1000}>
                <img src={JadeStatic} alt="Jade Garden preview" />
              </Fade>
              {/* <iframe
                class=" shadow-lg border-b-4 mb-4 border-blue-500"
                title="Demo of JadeGarden Website"
                src="https://giphy.com/embed/JsDghkoqtXvvP9xTGM"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
        </div>

        {/* <Fade triggerOnce>
          <div class="md:m-8" style={{ height: "510px" }}>
            <div class="card card-1 rounded overflow-hidden shadow-lg min-h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <div class="front front-1">
                <div class="flex flex-col mb-12 md:mb-0 text-center xl:text xl:justify-center mb-4 xl:mb-4">
                  <a
                    href="https://mypropsplus.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block text-blue-500  font-bold text-4xl  mb-2 hover:opacity-75"
                  >
                    MyPropsPlus
                  </a>
                  <div>
                    <a
                      href="https://github.com/props-plus/Frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="rounded bg-red-500 text-xs text-gray-200 font-bold mt-1 py-1 px-2 h-6 hover:opacity-75 w-32 text-center"
                    >
                      See the Code
                    </a>
                  </div>
                </div>
                <div class="px-2 py-4 h-32">
                  <p class="text-gray-700 text-xl">
                    Slack workspace application that allows users to track
                    acknowledgements they have received or sent.
                  </p>
                </div>
                <div class="flex flex-col justify-center">
                  <p>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #Auth0
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #ChartJS
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #Express
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #Gatsby
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #Jest
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #Knex
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #Material-UI
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #Redux
                    </span>
                  </p>
                </div>
              </div>
              <div class="back back-1 h-full">
                <div
                  style={{
                    width: "100%",
                    height: "0",
                    paddingBottom: "56%",
                    position: "relative",
                  }}
                >
                  <iframe
                    class=" shadow-lg border-b-4 mb-4 border-blue-500"
                    title="Demo of PropsPlus Website"
                    src="https://giphy.com/embed/TgmsEoGLQzQuEvDVMK"
                    width="100%"
                    height="80%"
                    style={{ position: "absolute" }}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div class="absolute bottom-0 pb-12">
                  <p class="text-gray-700">
                    <ul class="list-disc px-8 text-xs ml-8">
                      <li class="my-4 text-sm">
                        Collaborated on front end functionality, and implemented
                        styling design.
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
          <div class="md:m-8" style={{ height: "500px" }}>
            <div class=" card card-2 rounded overflow-hidden shadow-lg min-h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <div class="front front-2">
                <div class="flex flex-col mb-12 md:mb-0 text-center xl:text xl:justify-center mb-4 xl:mb-4">
                  <a
                    href="https://thebookr.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block text-blue-500  font-bold text-4xl  mb-2 hover:opacity-75"
                  >
                    Bookr
                  </a>
                  <div>
                    <a
                      href="https://github.com/the-bookr-team"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="rounded bg-red-500 text-xs text-gray-200 font-bold mt-1 py-1 px-2 h-6 hover:opacity-75 w-32 text-center"
                    >
                      See the Code
                    </a>
                  </div>
                </div>
                <div class="px-2 py-4 h-32">
                  <p class="text-gray-700 text-xl">
                    Book tracking application that allows users to leave
                    reviews, purchase books, and browse books.
                  </p>
                </div>

                <div class="pt-8 h-full">
                  <p>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #Bootstrap
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #Express
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #Knex
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #NodeJS
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #PostgreSQL
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #ReactJS
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #Redux
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #SASS
                    </span>
                  </p>
                </div>
              </div>
              <div class="back back-2">
                <div
                  style={{
                    width: "100%",
                    height: "0",
                    paddingBottom: "56%",
                    position: "relative",
                  }}
                >
                  <iframe
                    class=" shadow-lg border-b-4 mb-4 border-blue-500"
                    title="Bookr Demo Display"
                    src="https://giphy.com/embed/TiPUqyAtB1pxVC9LPe"
                    width="100%"
                    height="90%"
                    style={{ position: "absolute" }}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>

                <div class="flex flex-col justify-center">
                  <p class="text-gray-700">
                    <ul class="list-disc px-8 text-xs ml-8">
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
          <div class="md:m-8" style={{ height: "500px" }}>
            <div class=" card card-3 rounded overflow-hidden shadow-lg min-h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <div class="front front-3">
                <div class="flex flex-col mb-12 md:mb-0 text-center xl:text xl:justify-center mb-4 xl:mb-4">
                  <a
                    href="https://legend-of-lambda.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block text-blue-500  font-bold text-4xl  mb-2 hover:opacity-75"
                  >
                    Legend of Lambda
                  </a>
                  <div>
                    <a
                      href="https://github.com/LegendOfLambda/LoL-frontend/tree/master/lol-frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="rounded bg-red-500 text-xs text-gray-200 font-bold mt-1 py-1 px-2 h-6 hover:opacity-75 w-32 text-center"
                    >
                      See the Code
                    </a>
                  </div>
                </div>
                <div class="px-2 py-4 h-32">
                  <p class="text-gray-700 text-xl">
                    MUD based adventure game with a dungeon based system
                  </p>
                </div>
                <div class="pt-8 h-full">
                  <p>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #Django
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #Python
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #ReactJS
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #Redux
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #SASS
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #TypeScript
                    </span>
                  </p>
                </div>
              </div>
              <div class="back back-3">
                <div
                  style={{
                    width: "100%",
                    height: "0",
                    paddingBottom: "56%",
                    position: "relative",
                  }}
                >
                  <iframe
                    class=" shadow-lg border-b-4 mb-4 border-blue-500"
                    title="Legend of Lambda Demo Display"
                    src="https://giphy.com/embed/hSRkqjJHYKTSduawJf"
                    width="100%"
                    height="90%"
                    style={{ position: "absolute" }}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div class="flex flex-col justify-center">
                  <p class="text-gray-700">
                    <ul class="list-disc px-8 text-xs ml-8">
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











        <Fade triggerOnce>
          <div class="md:m-8" style={{ height: "500px" }}>
            <div class=" card card-4 rounded overflow-hidden shadow-lg min-h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <div class="front front-4">
                <div class="flex flex-col mb-12 md:mb-0 text-center xl:text xl:justify-center mb-4 xl:mb-4">
                  <a
                    href="https://jadegarden.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block text-blue-500  font-bold text-4xl mb-2 hover:opacity-75"
                  >
                    Jade Garden
                  </a>
                  <div>
                    <a
                      href="https://github.com/JustinAndrade/ramen-shop"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="rounded bg-red-500 text-xs text-gray-200 font-bold mt-1 py-1 px-2 h-6 hover:opacity-75 text-center"
                    >
                      See the Code
                    </a>
                  </div>
                </div>
                <div class="px-2 py-4 h-32">
                  <p class="text-gray-700 text-xl">
                    Front end application layout and design for a client who
                    owns a Ramen shop.
                  </p>
                </div>
                <div class="pt-8 h-full">
                  <p>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #ReactJS
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #HTML
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #CSS
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #StyledComponents
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
                      #Figma
                    </span>
                  </p>
                </div>
              </div>
              <div class="back back-4">
                <div
                  style={{
                    width: "100%",
                    height: "0",
                    paddingBottom: "56%",
                    position: "relative",
                  }}
                >
                  <iframe
                    class=" shadow-lg border-b-4 mb-4 border-blue-500"
                    title="Jade Garden Demo Display"
                    src="https://giphy.com/embed/JsDghkoqtXvvP9xTGM"
                    width="100%"
                    height="90%"
                    style={{ position: "absolute" }}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div class="flex flex-col justify-center">
                  <p class="text-gray-700">
                    <ul class="list-disc px-8 text-xs ml-8">
                      <li class="my-4 text-sm">
                        Optimized design and layout for landing page and user
                        flow.
                      </li>
                      <li class="my-4 text-sm">
                        Created custom SVG's and overlay for web application.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>

              <svg
                onClick={() => cardSwitch("4")}
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
        </Fade> */}
      </div>
    </section>
  );
};

export default Projects;
