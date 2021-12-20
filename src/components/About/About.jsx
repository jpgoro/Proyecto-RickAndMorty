import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const modal = {
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const About = ({ modalUp, setModalUp }) => {
  return (
    <>
      <button className="primary-btn" onClick={() => setModalUp(true)}>
        About
      </button>
      <AnimatePresence initial={false} exitBeforeEnter>
        {modalUp && (
          <motion.div className="backdrop">
            <motion.div className="about-container">
              <motion.button
                className="btn-close"
                onClick={() => setModalUp(null)}
              >
                X
              </motion.button>
              <motion.h2 style={{ color: "#94ff00", fontSize: "45px" }}>
                Rick and Morty
              </motion.h2>
              <motion.p
                style={{
                  color: "#fff",
                  letterSpacing: "2px",
          
                }}
              >
                Rick and Morty is an American adult animated science fiction
                sitcom created by Justin Roiland and Dan Harmon for Cartoon
                Network's nighttime programming block, Adult Swim. The series
                follows the misadventures of cynical mad scientist Rick Sanchez
                and his good-hearted, but fretful grandson Morty Smith, who
                split their time between domestic life and interdimensional
                adventures.
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
