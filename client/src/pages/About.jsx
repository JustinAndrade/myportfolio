import React from "react";
import vector from "../assets/img/coding-vector.png";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <section
      id="about"
      class="flex flex-col md:flex-col px-8 xlg:px-0 lg:flex-row pt-0 md:pt-10 lg:pt-10"
    >
      <div class="sm:w-100 lg:w-1/2 mb-4">
        <Slide triggerOnce>
          <img src={vector} alt="work setup vector drawing" />
        </Slide>
      </div>
      <div class="sm:w-100 lg:w-1/2 text-left sm:text-center p-4 md:p-2">
        <Slide triggerOnce>
          <div>
            <h2 class="border-b-8 border-blue-500 text-2xl sm:text-4xl xl:text-5xl inline">
              About me &amp; What I do
            </h2>
            <p class="my-8 text-sm md:text-base">
              I currently reside in Boston, Massachusetts. I'm a team player who
              understands the importance of communication and succeeding as a
              team. My goal-oriented mindset allows me to prioritize tasks and
              develop a strategic way of problem solving. My motivation derives
              from my pursuit of excellence and determination to never settle.
              My years of experience in customer service make me someone who
              understands customer and client satisfaction as the foundation of
              any business. My experience as a Team Leader has given me the
              skills I need to help my team maximize their potential as well as
              work as a cohesive unit. I pride myself in my work ethic and in
              setting a good example.
            </p>
          </div>
          <div class="flex-wrap justify-center items-center text-center rounded">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #HTML
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #CSS
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #Javascript
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #Python
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #ReactJS
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #NodeJS
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #Express
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #Git
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #Redux
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #Context
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #Web Hooks
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #SASS
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #LESS
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #Tailwindcss
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #Slack API
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              #Jest
            </span>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default About;
