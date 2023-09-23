import { attributes, flare, star, starpu } from "../assets/image";
import Button from "../UI/Button";
import { motion } from "framer-motion";

const LIST = [
  {
    id: 1,
    title: "Innovation and Creativity:",
    text: `Evaluate the uniqueness and creativity of the
    solution. Consider whether it addresses a real-world problem in a novel 
    way or introduces innovative features.`,
  },
  {
    id: 2,
    title: "Functionality:",
    text: `Assess how well the solution works. Does it perform its 
    intended functions effectively and without major issues? Judges would
    consider the completeness and robustness of the solution.`,
  },
  {
    id: 3,
    title: "Impact and Relevance:",
    text: `Determine the potential impact of the solution 
    in the real world. Does it address a significant problem, and is it relevant 
    to the target audience? Judges would assess the potential social, 
    economic, or environmental benefits.`,
  },
  {
    id: 4,
    title: "Technical Complexity:",
    text: `Evaluate the technical sophistication of the solution. 
    Judges would consider the complexity of the code, the use of advanced 
    technologies or algorithms, and the scalability of the solution.`,
  },
  {
    id: 5,
    title: "Adherence to Hackathon Rules:",
    text: `Judges will Ensure that the team adhered 
    to the rules and guidelines of the hackathon, including deadlines, use of 
    specific technologies or APIs, and any other competition-specific requirements.`,
  },
];

const List = ({ title, text }) => {
  return (
    <motion.p
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className=" text-sm mt-5"
    >
      <span className="text-[#D434FE] font-semibold">{title} </span>
      {text}
    </motion.p>
  );
};

const Attribute = () => {
  return (
    <article className=" z-30 relative flex flex-col md:flex-row px-8 md:px-24 py-12 gap-10 border-b border-[#ffffff10]">
      <img
        src={flare}
        alt=""
        className=" z-10 opacity-50 absolute md:-left-0 md:-bottom-[20%] md:w-[50%]"
      />
      <img
        src={flare}
        alt=""
        className=" z-10 opacity-50 absolute md:-right-[40%] md:-top-[50%] md:w-[60%]"
      />
      <img
        src={flare}
        alt=""
        className=" z-10 opacity-50 absolute md:-right-[35%] md:-bottom-[60%] md:w-[60%]"
      />

      <img
        src={star}
        className="absolute right-[35%] md:right-[55%] top-16 w-4 animate-pulse"
      />
      <img
        src={starpu}
        className="absolute right-2 md:right-24 bottom-[25%] w-4 animate-pulse"
      />

      <motion.img
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        src={attributes}
        className=" md:w-2/4"
      />
      <div className=" text-center md:text-start">
        <h2 className=" font-semibold text-xl md:text-2xl tracking-wider font-['Clash_Display']">
          Judging Criteria
        </h2>
        <h2 className=" font-semibold text-xl md:text-2xl text-[#D434FE] tracking-wider font-['Clash_Display']">
          Key attributes
        </h2>
        <div className=" mb-9">
          {LIST.map((list) => (
            <List key={list.id} {...list} />
          ))}
        </div>
        <Button text={"Read More"} />
      </div>
    </article>
  );
};

export default Attribute;
