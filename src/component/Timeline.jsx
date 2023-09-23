import React from "react";
import { star, starpu } from "../assets/image";
import { motion } from "framer-motion";

const DATA = [
  {
    id: 1,
    title: "Hackathon Announcement",
    text: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    date: "November 18, 2023",
  },
  {
    id: 2,
    title: "Teams Registration begins",
    text: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    date: "November 18, 2023",
  },
  {
    id: 3,
    title: "Teams Registration ends",
    text: "Interested Participants are no longer Allowed to register",
    date: "November 18, 2023",
  },
  {
    id: 4,
    title: "Announcement of the accepted teams and ideas",
    text: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    date: "November 18, 2023",
  },
  {
    id: 5,
    title: "Getlinked Hackathon 1.0 Offically Begins",
    text: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    date: "November 18, 2023",
  },
  {
    id: 6,
    title: "Demo Day",
    text: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    date: "November 18, 2023",
  },
];

const Timeline = () => {
  return (
    <section
      id="timeline"
      className=" relative text-center px-8 md:px-28 py-16 border-b border-[#ffffff10]"
    >
      <img
        src={star}
        className="absolute right-[30%] top-20 opacity-40 w-4 animate-pulse"
      />
      <img
        src={star}
        className="absolute right-2 md:right-0 md:left-[45%] top-[40%] w-4 animate-pulse"
      />
      <img
        src={starpu}
        className="absolute right-5 md:right-52 bottom-48 w-4 animate-pulse"
      />
      <img
        src={starpu}
        className="absolute left-2 md:left-20 top-40 w-4 animate-pulse"
      />
      <img
        src={star}
        className="absolute left-48 bottom-2 md:bottom-32 opacity-10 w-3 animate-pulse"
      />

      <h2 className="font-semibold text-xl md:text-2xl leading-normal tracking-wider font-['Clash_Display']">
        Timeline
      </h2>
      <p className=" md:w-[30%] mx-auto text-xs md:text-sm mt-2">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>
      <div className="pt-20 md:pt-32 flex flex-col gap-8 relative">
        <div className=" hidden md:block absolute md:top-12 md:left-[49.8%] w-1 rounded h-[82vh] bg-[#d634fed7]"></div>
        {DATA.map(({ id, title, text, date }) => (
          <motion.div
            key={id}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={` text-start relative px-5 md:flex ${
              id % 2 == 0 ? "md:flex-row-reverse" : ""
            } justify-between items-center`}
          >
            <div className="md:hidden absolute left-0 w-1 rounded h-full bg-[#d634fed7] "></div>
            <div
              className={` md:w-[42%] ${
                id % 2 == 0 ? "md:text-start" : "md:text-end"
              }`}
            >
              <h2 className=" font-semibold text-sm text-[#D434FE]">{title}</h2>
              <p
                className={` text-xs md:w-[78%] ${
                  id % 2 == 0 ? "md:mr-auto" : "md:ml-auto"
                } `}
              >
                {text}
              </p>
            </div>
            <span className=" absolute md:static -bottom-2 -left-5 border-8 border-[#150e28] p-3 md:p-5 bg-[#d634fef5] w-3 md:w-10 h-3 md:h-10 flex items-center justify-center rounded-full z-10 text-[10px]">
              {id}
            </span>
            <h2
              className={` md:w-[42%] ${
                id % 2 == 0 ? "md:text-end" : " md:text-start"
              } text-[#D434FE] font-semibold`}
            >
              {date}
            </h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
