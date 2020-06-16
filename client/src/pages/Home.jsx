import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import {
  mdiTwitter,
  mdiGithub,
  mdiLinkedin,
  mdiEmail,
  mdiArrowDownBold,
} from "@mdi/js";
import posed from "react-pose";

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
    <Box className="box" pose={isVisible ? "visible" : "hidden"}>
      <div class="h-screen flex flex-col mt-48">
        <h1 class="text-6xl">
          Hi! 👋, I'm{" "}
          <span class="font-bold underline text-blue-500">Justin Andrade.</span>
        </h1>
        <span>I'm a full-stack engineer. Motivated Passionate, Dedicated.</span>
        <div class="flex justify-center mt-5">
          <a
            class="hover:opacity-50"
            href="https://twitter.com/JusCoding"
            target="_blank"
          >
            <Icon path={mdiTwitter} size={2} color="#1DA1F2" />
          </a>

          <a
            class="hover:opacity-50"
            href="https://github.com/JustinAndrade"
            target="_blank"
          >
            <Icon path={mdiGithub} size={2} color="black" />
          </a>

          <a
            class="hover:opacity-50"
            href="https://www.linkedin.com/in/justin-andrade/"
            target="_blank"
          >
            <Icon path={mdiLinkedin} size={2} color="#0077B5" />
          </a>

          <a
            class="hover:opacity-50"
            href="mailto: j.andrade.john@gmail.com"
            target="_blank"
          >
            <Icon path={mdiEmail} size={2} color="lightgray" />
          </a>
        </div>
        <div class="flex justify-center mt-5">
          <button class="border-2 rounded border-solid border-blue-500 py-1 px-6 mx-5 text-blue-500 hover:opacity-50">
            Download my Resume
          </button>
          <button class="border-2 rounded border-solid border-blue-500 py-1 px-6 mx-5 text-blue-500 hover:opacity-50">
            Contact Me
          </button>
        </div>
        <div class="flex justify-center mt-56 transition duration-500 ease-in-out transform focus:skew-x-12 hover:scale-110">
          <Icon path={mdiArrowDownBold} size={2} color="#4299E1" />
        </div>
      </div>
    </Box>
  );
};

export default Home;
