import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Iconbar = () => {
  return (
    <div class="flex">
      <a
        href="https://twitter.com/JusCoding"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          class="p-3 mr-4 transition duration-500 ease-in-out  hover:text-white hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110"
          icon={faTwitter}
        />
      </a>

      <a
        href="https://github.com/JustinAndrade"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          class="p-3 mx-4 text-2xl transition duration-500 ease-in-out  hover:text-white hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110"
          icon={faGithub}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/justin-andrade/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          class="p-3 mx-4 transition duration-500 ease-in-out  hover:text-white hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110"
          icon={faLinkedin}
        />
      </a>

      <a
        href="mailto: j.andrade.john@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          class="p-3 mx-4 transition duration-500 ease-in-out  hover:text-white hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110"
          icon={faEnvelope}
        />
      </a>
    </div>
  );
};

export default Iconbar;
