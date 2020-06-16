import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="flex justify-between py-5">
      <Link class=" mx-2" to="/">
        Justin Andrade
      </Link>
      <nav class="flex">
        <Link class=" mx-2 text-gray-600" to="/about">
          About
        </Link>
        <Link class=" mx-2 text-gray-600" to="/projects">
          Projects
        </Link>
        <Link class=" mx-2 text-gray-600" to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
