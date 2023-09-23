import Button from "../UI/Button";
import {
  bulb,
  chain,
  flare,
  HeroImg,
  spark,
  star,
  Stars,
  Vector,
} from "../assets/image";
import "animate.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="overview"
      className="no-scrollbar overflow-y-hidden relative md:px-0 md:pl-24 mt-[95px] md:mt-[90px] border-b border-[#ffffff10] md:h-[87vh]"
    >
      <img
        src={flare}
        alt=""
        className=" opacity-50 absolute md:left-10 md:-top-[40%] md:w-[60%]"
      />
      <img
        src={star}
        className="absolute left-10 md:left-36 top-10 w-4 md:w-5 animate-pulse"
      />
      <img
        src={star}
        className="absolute right-[10%] md:right-[40%] top-[35%] md:top-16 w-5 opacity-20 animate-pulse-slow"
      />
      <img
        src={star}
        className="absolute md:left-[40%] bottom-36 w-5 opacity-25 animate-pulse-slow"
      />
      <div className="md:absolute right-12 top-4 animate__animated animate__slideInRight">
        <h4 className=" text-center text-sm md:text-4xl md:font-semibold italic">
          Igniting a Revolution in HR Innovation
        </h4>
        <img
          src={Vector}
          className=" w-[100px] md:w-fit absolute right-11 md:right-2"
        />
      </div>
      <div className=" md:flex md:pt-20">
        <div className=" text-center md:text-start mt-14 animate__animated animate__slideInDown">
          <div className="relative px-6 md:px-0">
            <img
              src={bulb}
              className="absolute right-20 md:right-20 -top-6 w-5 md:w-8 animate-bounce"
            />
            <h2 className=" font-bold text-2xl md:text-6xl leading-tight tracking-wider font-['Clash_Display']">
              getlinked Tech
            </h2>
          </div>
          <div className="relative px-6 md:px-0">
            <img
              src={spark}
              className="absolute right-7 md:-right-12 w-7 md:w-16"
            />
            <img
              src={chain}
              className="absolute right-14 md:right-3 w-7 md:w-16"
            />
            <h2 className=" font-bold text-2xl md:text-6xl leading-tight tracking-wider font-['Clash_Display']">
              Hackathon <span className=" text-[#D434FE]">1.0</span>
            </h2>
          </div>
          <p className=" text-sm md:text-base md:w-3/4 px-6 md:px-0 mt-2 mb-6">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Link to="/register">
            <Button text={"Register"} />
          </Link>
          <div className=" mt-6 md:mt-16 text-4xl md:text-7xl font-['Unica_One']">
            00<span className=" text-sm md:text-lg">h</span> 00
            <span className=" text-sm md:text-lg">m</span> 00
            <span className=" text-sm md:text-lg">s</span>
          </div>
        </div>

        <div className=" z-10 md:w-2/3 relative animate__animated animate__slideInUp">
          <img
            src={HeroImg}
            alt="heroimg"
            className=" md:h-[32.2rem] mt-5 md:mt-1 w-full"
          />
          <img
            src={Stars}
            className=" animate-pulse absolute -top-1 md:right-20 w-[95%] md:w-10/12 md:h-[32rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
