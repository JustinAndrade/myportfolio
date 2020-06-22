import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap text-gray-700 p-6">
        <div class="flex items-center flex-shrink-0 flex-grow text-gray-700 mr-6">
          <a href="/">{/* <JustinAndrade /> */}</a>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-gray-700 border-teal-400 hover:text-black hover:border-white">
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <div class="hidden w-full lg:block lg:flex lg:items-center lg:w-auto lg:pr-8">
            <a
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4"
              href="#about"
            >
              About
            </a>
            <a
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4"
              href="/#projects"
            >
              Projects
            </a>
            <a
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4"
              href="/#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
