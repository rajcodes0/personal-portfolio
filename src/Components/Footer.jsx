import React from "react";
import { FaGithub, FaLinkedin, FaReddit, FaDiscord } from "react-icons/fa";
import emailjs from '@emailjs/browser'
import { useState } from "react";



const Footer = () => {
  const [formData,setFormData]  = useState({
    user_name:"",
    user_email:"",
    message:"",
  })
  
  const handleChange = (e) =>{
   const {name,value} = e.target;
   setFormData((prev) =>({
      ...prev,
      [name]: value,
   }))
  }

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(
      () =>{
        alert("success message has been thrown");
        setFormData({
          user_name:"",
          user_email:"",
          message:""
        });
      },
      (error) =>{
        alert("message failed bro", error.text)
        console.log(error)
      }
    )
  }

  return (
    <footer className="bg-black text-white pt-8 flex flex-col">
      <div className="max-w-100 mx-auto px-6 m-10">
        <div className=" flex flex-col">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Message Me
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-white"
                name = "user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                 name = "user_email"
                   onChange={handleChange}
                  value={formData.user_email}
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-white"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                name = "message"
                 value={formData.message}  
                   onChange={handleChange}
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
