import { useState, useEffect } from "react";
import styles from "./AboutUs.module.css";
import Logo from "./images/linkedin.svg";
import Plant from "./images/left plant.svg";
import { api } from '../../Services/api';

const AboutUs = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    api.get("./developers").then((response) => {
      setDevelopers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className={styles.main}>
      <section className={styles.Container}>
        <div className={styles.content}>
          <div className="AboutUs">
            <h2 className={styles.titles}>About Us</h2>
            <hr className={styles.hairline}/>
            <p className={styles.aboutText}>
              We are a team of six undergraduate students from the field of IT,
              currently undertaking an internship at a leading technology
              company. At a heart of our collaboration is a shared passion for
              creating innovative and user-friendly web experiences.
            </p>
          </div>

          <img className={styles.Plant} src={Plant} alt="plant" />
        </div>
      </section>

      <section className={styles.DevelopersBody}>
        <h2 className={styles.titles}>Developers</h2>

        <div className={styles.Body}>
          {developers.map((developer) => (
            <div className={styles.Developers} key={developer.id}>
                <div className={styles.block} />
                <div className={styles.blockGreen} />
                <div className={styles.rest}>
                    <h3 className={styles.name}>{developer.name}</h3>
                    <p className={styles.description}>{developer.description}</p>
                    <a className={styles.Logo} href={developer.github} target="_blank">
                        <img className={styles.Logo} src={Logo} alt="logoLinkedin" />
                    </a>
                    <img className={styles.Photo} src={developer.photo} />
                </div>
            </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

