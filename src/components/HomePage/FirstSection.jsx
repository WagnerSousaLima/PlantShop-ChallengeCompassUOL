import classes from "./FirstSection.module.css";

import background from "./Images/image 21.png";

const FirstSection = () => {
  return (
    <div className={classes.homeMain}>
      <div className={classes.mainContent}>
        <span className={classes.homeMainText}>
          <article className={classes.subtitle}>
            <svg
              className={classes.rectangle}
              width="32"
              height="3"
              viewBox="0 0 32 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="3" fill="#1E1E24" />
            </svg>
            <p className={classes.subtitleText}>Love for Nature</p>
          </article>

          <h1>
            Discover your <em>green</em> side
          </h1>
          <p>
            We are your one-stop destination for all things green and growing.
            Our website offers a wide array of stunning plants, ranging from
            vibrant flowers to lush indoor foliage, allowing you to create your
            very own green oasis.
          </p>
          <button className={classes.buttonShopNow}>
            <span className={classes.buttonText}>Shop now</span>
          </button>
        </span>

        <div className={classes.learnGardening}>
          <a href="">Learn Gardening &rarr;</a>
        </div>
      </div>
      <span className={classes.backgroundImage}>
        <img src={background} alt="background image" draggable="false" />
      </span>
    </div>
  );
};

export default FirstSection;
