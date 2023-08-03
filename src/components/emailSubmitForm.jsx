import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const emailSubmitForm = () => {
  const [email, setEmail] = useState("");

  const sendEmail = () => {
    try {
      emailjs
        .send(
          import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
          import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
          { email },
          import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then((res) =>
          console.alert(
            "We have received your email. We will reach out shortly!"
          )
        )
        .catch((err) => console.log(err.text));
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary"
    >
      <span className="min-w-max pr-2 border-r border-box-border">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
          ></path>
        </svg>
      </span>
      <input
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="johndoe@gmail.com"
        className="w-full py-3 outline-none bg-transparent"
      />
      <button
        onClick={() => sendEmail()}
        className="px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] primary hover:after:opacity-100 hover:after:scale-[2.5] min-w-max text-white bg-primary border-transparent relative after:bg-[#172554] hover:border-[#172554]"
      >
        <span className="hidden sm:flex relative z-[5]"> Get Started</span>
        <span className="flex sm:hidden relative z-[5]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            ></path>
          </svg>
        </span>
      </button>
    </form>
  );
};

export default emailSubmitForm;
