import React from "react";
import Raj from "../assets/raj.jpeg";

import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Intro() {
  return (
    <header className="w-full">
      <div className="flex gap-4 items-start">
        <div className="w-[140px] h-[160px] flex-shrink-0">
          <img
            src={Raj}
            className="w-full h-full object-cover rounded-xl animate-float"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-[28px] font-extrabold tracking-tight leading-none text-white">
            RAJ <br />
            KUMAR
          </h1>
          <p className="flex flex-col gap-2 mt-1 text-white">
            {" "}
            Full Stack Developer
          </p>
          <div className="contacts flex flex-col gap-2 mt-2">
            <a
              href="tel:+919310532830"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-xs text-white bg-gray-800 transition-all duration-200 hover:bg-white hover:text-black hover:border-gray-600"
            >
              <FaPhoneAlt size={12} />
              +91-9xxxx xxxx0
            </a>

            <a
              href="mailto:webman.raj@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-xs text-white bg-gray-800 transition-all duration-200 hover:bg-white hover:text-black hover:border-gray-600"
            >
              <CiMail size={15} />
              webmanraj@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Intro;
