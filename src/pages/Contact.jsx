import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import ContactForm from "../form/ContactForm";
import { flare, star, starpu } from "../assets/image";
import Navbar from "../component/Navbar";

const Contact = () => {
  const isContact = true;
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <Navbar isContact={isContact} />
      <section className=" overflow-hidden relative pt-20 md:pt-0 md:mt-20 md:px-36 flex flex-col md:flex-row justify-between md:items-center h-[100vh] md:h-[88vh] w-full text-sm">
        <div
          onClick={goBack}
          className=" md:hidden absolute top-10 left-8 border border-[#D434FE] rounded-full"
        >
          <Icon icon="uil:arrow-left" width="20" />
        </div>
        <img
          src={star}
          className="absolute left-[80%] md:left-[12%] top-10 md:bottom-36 opacity-10 w-4 animate-pulse"
        />
        <img
          src={star}
          className="absolute right-[10%] bottom-10 md:bottom-36 opacity-10 w-4 animate-pulse"
        />
        <img
          src={starpu}
          className="absolute left-4 md:left-[45%] top-[42%] opacity-60 w-3 animate-pulse"
        />
        <img
          src={flare}
          alt=""
          className=" z-10 opacity-40 absolute -left-[30%] md:-left-[20%] md:-top-[20%] md:w-[50%]"
        />
        <img
          src={flare}
          alt=""
          className=" z-10 opacity-50 absolute -right-[100%] md:-right-[20%] md:-bottom-[45%] md:w-[50%]"
        />

        <div className=" hidden md:flex flex-col gap-4">
          <h2 className=" font-['Clash_Display'] text-2xl text-[#D434FE] font-semibold mb-4">
            Get in touch
          </h2>
          <p>
            Contact
            <br />
            Information
          </p>
          <p>
            27,Alara Street
            <br />
            Yaba 100012
            <br />
            Lagos State
          </p>
          <p>Call Us : 07067981819</p>
          <p>
            We are open from Monday-Friday
            <br />
            08:00am - 05:00pm
          </p>
          <p className="text-[#D434FE]">Share on</p>
          <p className=" flex gap-3 items-center">
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
                width="23"
              />
            </a>
            <a href="https://www.linkedin.com" target={"_blank"}>
              <Icon
                icon="typcn:social-linkedin"
                color="whitesmoke"
                width="23"
              />
            </a>
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
