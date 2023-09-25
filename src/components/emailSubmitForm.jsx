import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const emailSubmitForm = () => {

  return (
        <a href="/contact-us" className="hidden sm:flex relative z-[5]">
        <button
          
          className="px-6 py-3 rounded-full outline-none overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] primary hover:after:opacity-100 hover:after:scale-[2.5] min-w-max text-white bg-primary border-transparent relative hover:border-[#172554]"
        >
           Get Started
         
        </button>
        </a>
  );
};

export default emailSubmitForm;
