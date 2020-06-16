import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiArrowDownBold } from "@mdi/js";
import posed from "react-pose";
import Iconbar from "../components/iconbar";

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
    <Box pose={isVisible ? "visible" : "hidden"}>
      <div class=" flex flex-col mt-48">
        <h1 class="text-6xl">
          Hi! 👋, I'm{" "}
          <span class="font-bold underline text-blue-500">Justin Andrade.</span>
        </h1>
        <span>I'm a full-stack engineer. Motivated Passionate, Dedicated.</span>
        <Iconbar />
        <div class="flex justify-center mt-5">
          <button class="border-2 rounded border-solid border-blue-500 py-1 px-6 mx-5 text-blue-500 hover:opacity-50">
            Download my Resume
          </button>
          <button class="border-2 rounded border-blue-500 py-1 px-6 mx-5 text-blue-500 hover:opacity-50">
            Contact Me
          </button>
        </div>
        <a class="flex justify-center" href="#about">
          <Icon
            class="mt-56 transition duration-500 ease-in-out transform focus:skew-x-12 hover:scale-150 cursor-pointer"
            path={mdiArrowDownBold}
            size={2}
            color="#4299E1"
          />
        </a>
      </div>
      <div id="about" />
    </Box>
  );
};

export default Home;
