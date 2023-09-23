import React from "react";
import { flare, privacy, star, starpu, tick } from "../assets/image";
import Button from "../UI/Button";
import { motion } from "framer-motion";

const Policy = () => {
  return (
    <section className=" relative flex flex-col md:flex-row items-center px-8 md:px-36 py-16 border-b border-[#ffffff10]">
      <img
        src={flare}
        alt=""
        className=" z-10 opacity-50 absolute md:-left-36 md:-bottom-[30%] md:w-[30%]"
      />
      <img
        src={star}
        className="absolute left-[30%] top-52 md:top-20 opacity-10 w-4 animate-pulse"
      />
      <img
        src={starpu}
        className="absolute left-20 bottom-14 md:bottom-48 w-4 animate-pulse"
      />
      <img
        src={starpu}
        className="absolute left-[42%] top-6 md:top-40 w-4 animate-pulse"
      />

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className=" text-center md:text-start md:w-[51.5%]"
      >
        <h2 className=" font-semibold text-2xl tracking-wider font-['Clash_Display']">
          Privacy Policy and
        </h2>
        <h2 className=" font-semibold text-2xl tracking-wider text-[#D434FE] font-['Clash_Display']">
          Terms
        </h2>
        <p className=" text-xs">Last updated on September 12, 2023</p>
        <p className=" text-xs my-5 md:w-2/3">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <div className=" z-30 md:w-[80%] mt-10 leading-relaxed border border-[#D434FE] rounded p-5 md:p-14 text-xs">
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <h5 className="  text-start md:text-center mt-3 text-[#D434FE] font-semibold">
            Licensing Policy
          </h5>
          <p className="  text-start md:text-center mb-3 font-semibold">
            Here are terms of our Standard License:
          </p>
          <ol className={` text-start md:text-center mb-6`}>
            <li>
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </li>
            <li>
              You are licensed to use the item available at any free source
              sites, for your project developement
            </li>
          </ol>
          <Button text={"Read More"} />
        </div>
      </motion.div>
      <img src={privacy} className=" mt-10 md:mt-0 md:w-2/5" />
    </section>
  );
};

export default Policy;
