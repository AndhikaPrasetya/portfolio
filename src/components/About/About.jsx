import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/dhika.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>
                Bachelor Of Science Computer, Mercu
                Buana University
              </h3>
              <div className={styles.aboutYear}>
                2021 - Present
              </div>
              <div className={styles.aboutInfo}>
                Major in Information System | Minor in Information Technology
                Management System | GPA: 3.80
              </div>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Himpunan Mahasiswa Sistem Informasi</h3>
              <div className={styles.aboutYear}>2023 - 2024</div>
              <div className={styles.aboutInfo}>Head of Sports Division</div>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Internship at PT Sinar Mas Agro Resources & Technology Tbk</h3>
              <div className={styles.aboutYear}>March - November 2024</div>
              <div className={styles.aboutInfo}>Web Developer</div>
            </div>
          </li>
         
        </ul>
        <div className="range">
           
        </div>
      </div>
    </section>
  );
};
