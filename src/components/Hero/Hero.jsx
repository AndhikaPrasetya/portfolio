import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Andhika Prasetya </h1>
        <p className={styles.description}>
          I am a final-year undergraduate student studying Information Systems
          with skills and experience in web development, particularly as a
          frontend and backend developer. I am also a quick learner,
          knowledge-curious, creative, and adaptable individual.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("about/dhika.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
