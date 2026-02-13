import React from "react";
import { FaGithub, FaLinkedin, FaReddit, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 flex flex-col">
      <div className="max-w-100 mx-auto px-6 m-10">
        <div className=" flex flex-col">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Message Me
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-white"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-white"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-black py-2 rounded-md
             transition-all duration-300 ease-in-out
             hover:bg-sky-500 hover:scale-105
             active:scale-95"
              >
                Send
              </button>
            </form>
          </div>
          <div className="p-5 m-5 text-center items-center border border-white rounded-4xl">
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex gap-10 text-2xl items-center ">
              <a
                href="https://github.com/rajcodes0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition cursor-pointer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/raj-btw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition cursor-pointer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.reddit.com/user/Odd_Zombie_193/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition cursor-pointer"
              >
                <FaReddit />
              </a>

              <a
                href="https://discord.com/users/1447611890892148798"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition cursor-pointer"
              >
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center ">
        <h1 className="font-['Parisienne'] text-3xl">See you soon..</h1>
      </div>
    </footer>
  );
};

export default Footer;
