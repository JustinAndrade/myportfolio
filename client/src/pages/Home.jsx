import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiArrowDownBold } from "@mdi/js";
import posed from "react-pose";

import Iconbar from "../components/iconbar";
import TypeWriter from "../components/typewriter";

import avatar from "../assets/img/avatar.png";

const Box = posed.div({
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      opacity: { ease: "easeOut", duration: 1500 },
      default: { ease: "linear", duration: 500 },
    },
  },
  hidden: { opacity: 0 },
});

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsVisible({ isVisible: !isVisible });
    }, 1000);
  });

  return (
    <Box
      class="flex justify-center items-center flex-col  text-gray-800 text-center h-84-screen mb-0 lg:mb-4 "
      pose={isVisible ? "visible" : "hidden"}
    >
      <div class="h-screen  text-center">
        <div class="flex justify-center mt-12">
          <img
            class="h-24 md:h-64 rounded-full flex items-center justify-center w-auto"
            src={avatar}
            alt="vector image of person holding rocket"
          />
        </div>
        <h1 class="font-extrabold text-xl md:text-5xl lg:text-6xl">
          Hi! 👋, I'm{" "}
          <span class="underline text-blue-500 ">Justin Andrade.</span>
        </h1>
        <span class="block pt-4  md:text-4xl lg:text-4xl font-normal text-center">
          <TypeWriter />
        </span>
        <h4 class="text-xl md:text-4xl" />
        <div class="flex justify-center mt-5">
          <Iconbar />
        </div>
        <div class="flex justify-center mt-5">
          <a
            href="https://drive.google.com/file/d/1FbUzRKFQ6dTulL8lSy9mR9HsotigUwJ4/view"
            target="_blank"
            class="border-2 rounded border-blue-500 py-1 px-6 mx-5 text-xs md:text-lg text-blue-500 hover:opacity-50"
          >
            Download my Resume
          </a>
          <a
            href="#contact"
            class="border-2 rounded border-blue-500 py-1 px-6 mx-5 text-xs md:text-lg text-blue-500 hover:opacity-50"
          >
            Contact Me
          </a>
        </div>
        <div class="animate__animated  animate__bounce animate__infinite">
          <a class="flex justify-center" href="#about">
            <Icon
              class="mt-12 md:mt-24 transition duration-500 ease-in-out transform focus:skew-x-12 hover:scale-150 cursor-pointer"
              path={mdiArrowDownBold}
              size={2}
              color="#4299E1"
            />
          </a>
        </div>
      </div>
    </Box>
  );
};

export default Home;
