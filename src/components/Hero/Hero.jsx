import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Andhika Prasetya </h1>
        <p className={styles.description}>
          A third-year undergraduate student studying Information Systems and I
          have the skills and experience in web development, especially as a
          frontend developer and backend developer. I also have a quick learner,
          knowledge-curious, creative mind and adaptable person.
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
