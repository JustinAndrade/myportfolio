import React from "react";
import Iconbar from "../components/iconbar";

const Contact = () => {
  return (
    <div class="my-8" id="contact">
      <h3 class="border-b-8 border-blue-500 text-4xl md:text-5xl inline-block mb-6">
        Let's Connect
      </h3>
      ,
      <p class="text-2xl">
        Interested in working together? Wherever you are with your idea or your
        project, I'll be happy to help. Ready to make a difference?
      </p>
      <div class="flex flex-col lg:flex-row md:flex-row w-full justify-between text-gray-800 mb-8 mt-8">
        <div class="flex flex-col w-1/2 text-base lg:text-xl leading-loose py-12">
          <a
            href="mailto:j.andrade.john@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            j.andrade.john@gmail.com
          </a>
          <a href="tel:5088587966" target="_blank" rel="noopener noreferrer">
            508-858-7966
          </a>
          <p>Boston, Massachusetts</p>
          <Iconbar />
        </div>
        <div class="w-full md:w-1/2 px-8">
          <h3 class="border-b-8 border-blue-500 text-xl lg:text-2xl inline-block px-0 mb-8">
            Send me a message
          </h3>
          <form
            class="w-full max-w-lg"
            action="https://formspree.io/j.andrade.john@gmail.com"
            method="POST"
          >
            <div class="flex flex-wrap mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white"
                placeholder="John Doe"
                name="name"
              />

              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white"
                placeholder="john.doe@gmail.com"
                name="_replyto"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full p-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                cols="30"
                required=""
                row="20"
                name="text"
              ></textarea>
            </div>
            <input
              type="submit"
              class="font-normal bg-white transition duration-500  ease-in-out  hover:text-white hover:bg-blue-500 transform hover:-translate-y-1  shadow-outline text-blue-500 rounded border-blue-500 px-8 py-2 my-8"
              value="Send Email"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
