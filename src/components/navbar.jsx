import React from "react";

const displayMenu = () => {
  let x = document.getElementById("myLinks");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

const Navbar = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap text-gray-700 p-6">
        <div class="flex justify-between items-center flex-shrink-0 flex-grow text-gray-700 mr-6">
          <a
            href="/"
            style={{ fontFamily: "Arizonia, cursive" }}
            class="text-4xl font-bold hover:opacity-75"
          >
            JusCoding
          </a>
          <div id="hamburger" class="mobile block lg:hidden">
            <button
              onClick={displayMenu}
              class="flex items-center px-3 py-2 border rounded text-gray-700 border-teal-400 hover:text-black hover:border-white"
            >
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
            <div style={{ display: "none" }} id="myLinks">
              <p class="text-4xl text-gray-700" onClick={displayMenu}>
                Home
              </p>
              <a
                class="text-4xl text-gray-700"
                onClick={displayMenu}
                href="#about"
              >
                About
              </a>
              <a
                class="text-4xl text-gray-700"
                onClick={displayMenu}
                href="#projects"
              >
                Projects
              </a>
              <a
                class="text-4xl text-gray-700"
                onClick={displayMenu}
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
          <div class="hidden w-full lg:block lg:flex lg:items-center lg:w-auto lg:pr-8">
            <a
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4 hover:opacity-75 hover:text-blue-500"
              href="#about"
            >
              About
            </a>
            <a
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4 hover:opacity-75 hover:text-blue-500"
              href="/#projects"
            >
              Projects
            </a>
            <a
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4 hover:opacity-75 hover:text-blue-500"
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
