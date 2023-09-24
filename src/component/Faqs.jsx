import React, { useState } from "react";
import { faq, star, starpu } from "../assets/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";


const FAQS = [
  {
    id: 1,
    question: "Can I work on a project I started before the hackathon?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, officiis cum dolore non illo ullam natus deserunt dolorum ad distinctio.",
  },
  {
    id: 2,
    question: "What happen if ineed help during the hackathon?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, officiis cum dolore non illo ullam natus deserunt dolorum ad distinctio.",
  },
  {
    id: 3,
    question: "What happens if I don't have an idea for a project?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, officiis cum dolore non illo ullam natus deserunt dolorum ad distinctio.",
  },
  {
    id: 4,
    question: "Can I join a team or do I have to come with one?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, officiis cum dolore non illo ullam natus deserunt dolorum ad distinctio.",
  },
  {
    id: 5,
    question: "What happens after the hackathon ends",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, officiis cum dolore non illo ullam natus deserunt dolorum ad distinctio.",
  },
  {
    id: 6,
    question: "Can I work on a project I started before the hackathon?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, officiis cum dolore non illo ullam natus deserunt dolorum ad distinctio.",
  },
];

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
    initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 100 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
     className="accordion text-start md:w-[90%] p-2 border-b border-[#D434FE]">
      <div className=" flex justify-between items-center">
        <p className=" text-sm md:text-base">{question}</p>
        <span
          className=" text-lg font-semibold text-[#D434FE] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <Icon icon="ph:minus-bold" color="#D434FE" width="12" />
          ) : (
            <Icon icon="ic:baseline-plus" color="#D434FE" width="15" />
          )}
        </span>
      </div>
      {isOpen && (
        <p className=" text-xs md:text-sm mt-2 leading-normal">{answer}</p>
      )}
    </motion.div>
  );
};

const Faqs = () => {
  return (
    <article
      id="faqs"
      className=" relative flex flex-col md:flex-row px-8 md:px-24 py-12 items-center border-b border-[#ffffff10]"
    >
      <img
        src={star}
        className="absolute left-[34%] top-[18%] w-4 animate-pulse"
      />
      <img
        src={starpu}
        className="absolute left-3 md:left-36 md:top-[50%] md:bottom-48 w-4 animate-pulse"
      />

      <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 100 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
       className=" text-center md:text-start md:w-2/4 md:pl-20">
        <h2 className="font-semibold text-xl md:text-2xl leading-normal tracking-wider font-['Clash_Display']">
          Frequently Ask
        </h2>
        <h2 className="font-semibold text-xl md:text-2xl text-[#D434FE] leading-normal tracking-wider font-['Clash_Display']">
          Question
        </h2>
        <p className=" md:w-[90%] text-xs md:text-sm mb-6 md:mb-12 mt-4">
          We got answers to the questions that you might want to ask about{" "}
          <span className=" font-semibold">getlinked Hackathon 1.0</span>
        </p>
        <div className="max-h-80 overflow-y-scroll no-scrollbar">
          {FAQS.map((item) => (
            <Accordion key={item.id} {...item} />
          ))}
        </div>
      </motion.div>
      <motion.img
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 100 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
       src={faq} className=" md:w-[45%] mt-12 md:mt-0" />
    </article>
  );
};

export default Faqs;
