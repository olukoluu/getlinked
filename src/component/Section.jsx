import React from "react";
import Article from "./Article";
import { idea, rules } from "../assets/image";
import Attribute from "./Attribute";

const ARTICLES = [
  {
    id: 1,
    title: "Introduction to getlinked",
    subtitle: "tech Hackathon 1.0",
    text: `Our tech hackathon is a melting pot of visionaries, and its purpose is as
    clear as day: to shape the future. Whether you're a coding genius, a 
    design maverick, or a concept wizard, you'll have the chance to transform 
    your ideas into reality. Solving real-world problems, pushing the boundaries
    of technology, and creating solutions that can change the world,
    that's what we're all about!`,
    img: idea,
  },
  {
    id: 2,
    title: "Rules and",
    subtitle: "Guidelines",
    text: `Our tech hackathon is a melting pot of visionaries, and its purpose is as
    clear as day: to shape the future. Whether you're a coding genius, a 
    design maverick, or a concept wizard, you'll have the chance to transform 
    your ideas into reality. Solving real-world problems, pushing the boundaries
    of technology, and creating solutions that can change the world,
    that's what we're all about!`,
    img: rules,
  },
];

const Section = () => {
  return (
    <>

      {ARTICLES.map((article) => (
        <Article
          key={article.id}
          id={article.id}
          title={article.title}
          subtitle={article.subtitle}
          img={article.img}
          text={article.text}
        />
      ))}

      <Attribute />
    </>
  );
};

export default Section;
