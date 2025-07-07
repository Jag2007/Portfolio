import React from "react";
import { CONTACT } from "./constants";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20 pl-55">
      <h1 className="my-10 text-center text-4xl">Get In Touch</h1>
      <div className="text-center tracking-lighter">
        <p className="my-4">Phone: {CONTACT.phoneNo}</p>
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://www.linkedin.com/in/jagruthi-pulumati-087b69305/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-4xl text-blue-700" />
          </a>
          <a
            href="https://www.instagram.com/jagruthi._16/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-4xl text-pink-500" />
          </a>
        </div>
        <a href="#" className="">
          Email: {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
