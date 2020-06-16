import React from "react";

const Navbar = () => {
  return (
    <div class="flex justify-between py-5 m64">
      <a style={{ fontFamily: "cursive", fontSize: "1.8rem" }} to="/">
        Justin Andrade
      </a>
      <nav class="flex">
        <a class=" mx-2 text-gray-600" href="#about">
          About
        </a>
        <a class=" mx-2 text-gray-600" to="/projects">
          Projects
        </a>
        <a class=" mx-2 text-gray-600" to="/contact">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
