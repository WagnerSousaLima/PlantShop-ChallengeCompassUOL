import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@700&family=Lato:wght@700&family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className={styles.top}>
        <div className={styles.main}>
          <h1>Stay Fresh</h1>
          <a href="#">compassinhos@gmail.com</a>
          <a href="#">+55 41 99999-9999</a>
        </div>
        <div className={styles.aside}>
          <div className="links">
            <h2>Links</h2>
            <a href="#">About us</a>
            <a href="#">Products</a>
            <a href="#">Blogs</a>
          </div>
          <div className="community">
          <h2>Community</h2>
            <a href="#">About us</a>
            <a href="#">Products</a>
            <a href="#">Blogs</a>
          </div>
        </div>
      </div>
      <div className={styles.base}>
        <img src="../../../public/images/footer_logo.png" alt="logo" />
      </div>
    </footer>
  )
}

export default Footer;