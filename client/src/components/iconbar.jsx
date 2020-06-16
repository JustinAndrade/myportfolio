import React from "react";
import Icon from "@mdi/react";
import { mdiTwitter, mdiGithub, mdiLinkedin, mdiEmail } from "@mdi/js";

const Iconbar = () => {
  return (
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
  );
};

export default Iconbar;
