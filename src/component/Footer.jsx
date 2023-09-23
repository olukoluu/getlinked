import React from "react";
import { star, starpu } from "../assets/image";
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" bg-[#100B20] px-8 md:px-32 py-8 relative">
      <img src={star} className="absolute left-14 bottom-14 md:top-20 w-5 animate-pulse" />
      <img src={star} className="absolute right-[30%] w-3 opacity-30" />
      <img src={star} className="absolute right-48 top-36 w-4 animate-pulse" />
      <img
        src={starpu}
        className="absolute left-[45%] bottom-52 md:bottom-16 w-4 animate-pulse"
      />

      <div className="flex flex-col md:flex-row justify-between">
        <div className=" md:w-[35%]">
          <div className="">
            <h2 className=" font-bold text-2xl font-['Clash_Display'] tracking-wide">
              get<span className=" text-[#D434FE]">linked</span>
            </h2>
            <p className=" text-xs mt-2 mb-6 mb:mb-14">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>

          <div className="">
            <span className=" text-xs hover:text-[#D434FE] border-[#D434FE] border-r-2 p-1">
              Terms of Use
            </span>
            <span className=" text-xs hover:text-[#D434FE] border-[#D434FE] border-l-2 p-1">
              Privacy Policy
            </span>
          </div>
        </div>
        <div className=" my-8 md:my-0 text-xs leading-relaxed">
          <h3 className=" text-[#D434FE]">Useful Links</h3>
          <a href="#overview" className="hover:text-[#D434FE]">
            <h3>Overview</h3>
          </a>
          <a href="#timeline" className="hover:text-[#D434FE]">
            <h3>Timeline</h3>
          </a>
          <a href="#faqs" className="hover:text-[#D434FE]">
            <h3>FAQs</h3>
          </a>
          <Link to="/register" className="hover:text-[#D434FE]">
            <h3>Register</h3>
          </Link>
          <h3 className=" flex items-center gap-2 text-[#D434FE] ">
            Follow Us
            <a href="https://www.instagram.com" target={"_blank"}>
              <Icon
                icon="simple-line-icons:social-instagram"
                color="whitesmoke"
                width="16"
              />
            </a>
            <a href="https://www.twitter.com" target={"_blank"}>
              <Icon icon="simple-icons:x" color="whitesmoke" width="16" />
            </a>
            <a href="https://www.facebook.com" target={"_blank"}>
              <Icon
                icon="typcn:social-facebook"
                color="whitesmoke"
                width="20"
              />
            </a>
            <a href="https://www.linkedin.com" target={"_blank"}>
              <Icon
                icon="typcn:social-linkedin"
                color="whitesmoke"
                width="20"
              />
            </a>
          </h3>
        </div>
        <div className=" text-xs leading-relaxed">
          <h2 className=" text-[#D434FE]">Contact Us</h2>
          <p>
            <ion-icon name="call"></ion-icon> +234 679 81819
          </p>
          <p>
            <ion-icon name="location"></ion-icon> 27,Alara Street Yaba 100012
            Lagos State
          </p>
        </div>
      </div>

      <p className=" text-center text-xs mt-12 ">
        All rights reserved. © getlinked Ltd.
      </p>
    </footer>
  );
};

export default Footer;
