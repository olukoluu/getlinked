import {
  flare,
  liberty,
  libertypay,
  paybox,
  star,
  starpu,
  virtualplus,
  winwise,
  wisper,
} from "../assets/image";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className=" relative px-6 md:px-24 py-16 border-b border-[#ffffff10] text-center"
    >
      <img
        src={flare}
        alt=""
        className=" z-10 opacity-50 absolute md:-left-44 md:-top-[20%] md:w-[60%]"
      />
      <img
        src={flare}
        alt=""
        className=" z-10 opacity-50 absolute md:-right-[35%] md:-bottom-[40%] md:w-[60%]"
      />

      <img
        src={star}
        className="absolute left-[52%] bottom-10 md:bottom-36 opacity-10 w-4 animate-pulse"
      />
      <img
        src={starpu}
        className="absolute  md:left-[50%] top-[42%] opacity-60 w-3 animate-pulse"
      />
      <img
        src={starpu}
        className="absolute left-40 top-4 md:top-36 w-5 animate-pulse"
      />

      <h2 className=" font-bold text-xl md:text-2xl font-['Clash_Display']">
        Partners and Sponsors
      </h2>
      <p className=" text-xs md:w-2/5 mx-auto mt-3 mb-16">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <div className=" border border-[#D434FE] rounded py-[40px] md:py-[95px] flex justify-center items-center">
        <div className=" relative flex justify-center md:justify-around items-center gap-5 md:gap-10 w-[70%] md:w-[45%] flex-wrap ">
          <div className="absolute h-1 w-full rounded bg-[#D434FE] left-0"></div>
          <div className="absolute w-1 h-full rounded bg-[#D434FE] left-16 md:left-44"></div>
          <div className="absolute w-1 h-full rounded bg-[#D434FE] right-16 md:right-44"></div>
          <div className="absolute rounded-full bg-[#150e28] right-[3.5rem] md:right-[31%] w-5 md:w-8 h-5 md:h-8"></div>
          <div className="absolute rounded-full bg-[#150e28] left-14 md:left-[31%] w-5 md:w-8 h-5 md:h-8"></div>

          <img src={liberty} className=" w-[25%] md:w-[20%] md:h-[80px]" />
          <img src={libertypay} className=" w-[25%] md:w-[20%] md:h-[20px]" />
          <img src={winwise} className=" w-[25%] md:w-[20%] md:h-[80px]" />
          <img src={wisper} className=" w-[25%] md:w-[20%] md:h-[80px]" />
          <img src={paybox} className=" w-[25%] md:w-[20%] md:h-[20px]" />
          <img src={virtualplus} className=" w-[25%] md:w-[20%] md:h-[20px]" />
        </div>
      </div>
    </motion.section>
  );
};

export default Partners;
