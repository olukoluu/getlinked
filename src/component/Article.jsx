import React from "react";
import { star, starpu } from "../assets/image";
import { motion } from "framer-motion"


const Article = ({ title, subtitle, text, img, id }) => {
  return (
    <article
      className={` relative md:pl-52 px-8 py-12 md:px-36 flex flex-col md:flex-row ${
        id == 2 ? "md:flex-row-reverse" : ""
      } md:gap-32 items-center border-b border-[#ffffff10]`}
    >
      <img
        src={star}
        className="absolute right-8 top-20 opacity-40 w-4 animate-pulse"
      />
      <img
        src={star}
        className="absolute left-[25%] top-[50%] md:top-12 w-4 animate-pulse"
      />
      <img
        src={starpu}
        className="absolute left-2 md:left-[50%] bottom-48 w-4 animate-pulse"
      />
      <img
        src={starpu}
        className="absolute right-8 md:right-20 bottom-[40%] w-4 animate-pulse"
      />
      <img
        src={star}
        className="absolute left-[30%] bottom-5 opacity-10 w-3 animate-pulse"
      />
      <img src={img} className=" md:w-[50%]" />
      <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 100 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }} 
      className=" md:w-2/4 text-center md:text-start mt-5 md:mt-0">
        <h2 className=" font-semibold text-xl md:text-2xl tracking-wider font-['Clash_Display']">
          {title}
        </h2>
        <h2 className=" font-semibold text-xl md:text-2xl tracking-wider text-[#D434FE] font-['Clash_Display']">
          {subtitle}
        </h2>
        <p className=" text-xs md:text-sm leading-relaxed mt-3">{text}</p>
      </motion.div>
    </article>
  );
};

export default Article;
