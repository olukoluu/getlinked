import {
  cup,
  gold,
  silver,
  bronze,
  star,
  starpu,
  flare,
} from "../assets/image";
import { motion } from "framer-motion";

const Card = ({ position, amount, medal }) => {
  return (
    <div className=" relative w-[26%]">
      <img
        src={medal}
        className={`${
          position == "1st"
            ? " md:w-[100%] h-[90px] md:h-[165px] -top-[30%] md:-top-[42%] -right-1 md:right-[0.3px]"
            : " md:w-[150px] -top-[41%] left-1 md:left-0 md:right-[1px]"
        } absolute z-10`}
      />

      <div
        className={` w-[90px] md:w-full h-[110px] md:h-full ${
          position == "1st"
            ? "mt-4 bg-[#8f3aff31] border-[#903AFF]"
            : "bg-[#d634fe31] border-[#D434FE]"
        } card border relative text-center rounded-lg pt-10 md:pt-20 pb-6 px- `}
      >
        <h3 className=" font-bold text-sm md:text-xl leading-none">
          {position}
        </h3>
        <h5 className=" font-semibold text-xs md:text-base">Runner</h5>
        <h3 className=" font-bold text-sm md:text-xl text-[#D434FE]">
          {amount}
        </h3>
      </div>
    </div>
  );
};

const Rewards = () => {
  return (
    <section className=" relative flex flex-col md:flex-row justify-between items-center text-center md:text-start px-6 md:px-24 pt-16 pb-24 border-b border-[#ffffff10] bg-[#100B20]">
      <img
        src={flare}
        className=" z-10 opacity-50 absolute md:left-0 md:-top-20 md:w-[55%]"
      />
      <img
        src={flare}
        className=" z-10 opacity-50 absolute md:-right-[30%] md:-bottom-[40%] md:w-[50%]"
      />

      <img
        src={star}
        className="absolute left-10 md:left-[30%] top-20 opacity-40 w-4 animate-pulse"
      />
      <img
        src={star}
        className="absolute left-[45%] top-[23%] md:top-[40%] w-4 animate-pulse"
      />
      <img
        src={starpu}
        className="absolute left-20 bottom-12 md:bottom-48 w-4 animate-pulse"
      />
      <img
        src={starpu}
        className="absolute right-5 md:right-52 top-40 w-4 animate-pulse"
      />
      <img
        src={star}
        className="absolute left-2 md:left-[30%] bottom-20 opacity-10 w-3 animate-pulse"
      />

      <img
        src={cup}
        className="absolute top-[26%] md:static w-[90%] md:w-[40%]"
      />
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className=" md:w-2/4 w-full"
      >
        <div className="">
          <h2 className="font-semibold text-2xl tracking-wider font-['Clash_Display']">
            Prizes and
          </h2>
          <h2 className="font-semibold text-2xl text-[#D434FE] tracking-wider font-['Clash_Display']">
            Rewards
          </h2>
          <p className=" md:w-[70%] text-sm mt-3">
            Highlight of the prizes or rewards fror winners and for
            participants.
          </p>
        </div>
        <div className=" ml-2 md:ml-0 gap-5 flex md:gap-3 mt-[140%] md:mt-40">
          <Card position={"2nd"} amount={"N300,000"} medal={silver} />
          <Card position={"1st"} amount={"N400,000"} medal={gold} />
          <Card position={"3rd"} amount={"N150,000"} medal={bronze} />
        </div>
      </motion.div>
    </section>
  );
};

export default Rewards;
