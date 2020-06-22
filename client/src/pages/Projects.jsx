import React from "react";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <section
      id="projects"
      class="px-4 md:px-0 lg:px-0 mt-10 flex flex-col items-center text-left"
    >
      <h2 class="border-b-8 border-blue-500 text-5xl inline-block mb-6">
        Projects
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
        {/* Card Start */}
        <Fade triggerOnce>
          <div class="m-8">
            <div
              style={{ height: "600px" }}
              class="max-w-sm rounded overflow-hidden shadow-lg min-h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                class="w-full h-64"
                src="http://juscoding.com/images/myprops.png"
              />
              <div class="px-6 py-4">
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
                <p class="text-gray-700">
                  <ul class="list-disc px-8 text-xs md:text-base">
                    <li>
                      Collaborated on front end functionality, and implemented
                      styling design.
                    </li>
                    <li>Slack API integration and Auth0 implementation.</li>
                    <li>Database structuring, and schema design.</li>
                  </ul>
                </p>
              </div>

              <div class="px-6 pb-10 absolute bottom-0">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #SASS
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #Python
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #ReactJS
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #TypeScript
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #Django
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #Redux
                </span>
              </div>
            </div>
          </div>
        </Fade>
        <Fade triggerOnce>
          <div class="m-8">
            <div
              style={{ height: "600px" }}
              class="max-w-sm rounded overflow-hidden shadow-lg min-h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                class="w-full h-64"
                src="http://juscoding.com/images/pic03.jpg"
              />
              <div class="px-6 py-4">
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
                  <ul class="list-disc px-8 text-xs md:text-base">
                    <li>
                      Created a user friendly design, that enables a great user
                      experience.
                    </li>
                    <li>
                      Built out entire backend, database, and authorization
                      features.
                    </li>
                  </ul>
                </p>
              </div>

              <div class="px-6 pb-10 absolute bottom-0">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #SASS
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #Python
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #ReactJS
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #TypeScript
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #Django
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #Redux
                </span>
              </div>
            </div>
          </div>
        </Fade>
        <Fade triggerOnce>
          <div class="m-8">
            <div
              style={{ height: "600px" }}
              class="max-w-sm rounded overflow-hidden shadow-lg min-h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                class="w-full h-64"
                src="http://juscoding.com/images/legendoflambda.jpg"
              />
              <div class="px-6 py-4">
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
                <p class="text-gray-700">
                  <ul class="list-disc px-8 text-xs md:text-base">
                    <li>
                      Completed front end application, creating the landing
                      page, and authorization for login and registration.
                    </li>
                    <li>Utilized base level sprites for game visualization.</li>
                  </ul>
                </p>
              </div>

              <div class="px-6 pb-10 absolute bottom-0">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #SASS
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #Python
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #ReactJS
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #TypeScript
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #Django
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-xs md:text-sm font-semibold text-gray-700 mr-2">
                  #Redux
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Projects;
