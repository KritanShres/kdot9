import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles.js";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion.js";

import { FaDownload } from "react-icons/fa"; 

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Who am I?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      I'm a Computer Engineer who really enjoys problem-solving using code. 
      I enjoy developing scalable and well-considered systems, especially with JavaScript and React, Node.js, and Spring Boot. 
      As a programmer, I consider coding to be an iterative process, the initial version is always messy, and that's perfectly fine. 
      What's important is improving it, optimizing it, and developing it into something efficient and maintainable. 
      I concentrate on coding something structured and readable while considering the 
      larger picture in mind: developing solutions that are practical, scalable, and designed to tackle real-world issues.
      </motion.p>

      {/* Resume download section */}
      <div className="mt-10 flex flex-col items-center">
        <p className="text-secondary mb-4 text-[15px]">Download my Resume</p>
        <a
          href="src\assets\KritansResume.pdfd" // replace with actual path
          download
          className="flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-tertiary transition-colors"
        >
          <FaDownload className="mr-2" />
          Download
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
