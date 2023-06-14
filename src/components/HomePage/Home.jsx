import classes from "./Home.module.css";
import background from "./Images/image 21.png";
import leftBackground from "./Images/left plant.png";
import nutrientsIcon from "./Images/Property 1=bag.svg";
import wateringIcon from "./Images/Property 1=water.svg";
import sunlightIcon from "./Images/Property 1=sun.svg";
import firstPlant from "./Images/Rectangle 32.png";
import secondPlant from "./Images/Rectangle 33.png";
import thirdPlant from "./Images/Rectangle 34.png";

const Home = () => {
  return (
    <>
      <div className={classes.homeMain}>
        <span className={classes.homeMainText}>
          <article className={classes.subtitle}>
            <p>
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
              Love for Nature
            </p>
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
          <button className={classes.buttonShopNow}>Shop now</button>
          <span className={classes.leftBackgroundImage}>
            <img
              src={leftBackground}
              alt="left background image"
              draggable="false"
            />
          </span>
        </span>
        {/* <svg
          className={classes.square}
          width="80"
          height="80"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="100" fill="#D9D9D9" />
        </svg> */}
        <span className={classes.backgroundImage}>
          <img src={background} alt="background image" draggable="false" />
        </span>
      </div>

      <section className={classes.homeSection}>
        <span className={classes.stepsTitle}>
          <h2>
            Steps to take care of your <em>plants</em>
          </h2>
          <p>
            By following these three steps - proper watering, appropriate
            sunlight, and providing essential nutrients - you'll be well on your
            way to maintaining healthy and thriving plants.
          </p>
        </span>
        <article className={classes.stepsSection}>
          <div>
            <img src={wateringIcon} />
            <h3>Watering</h3>
            <p>
              Water your plants when the top inch of soil feels dry to the
              touch. Avoid overwatering, as it can lead to root dehydration.
            </p>
          </div>
          <div>
            <img src={sunlightIcon} />
            <h3>Sunlight</h3>
            <p>
              Most plants need adequate sunlight to thrive. Place your plants in
              areas that receive the appropriate amount of light for their
              specific needs
            </p>
          </div>
          <div>
            <img src={nutrientsIcon} />
            <h3>Nutrients and Fertilizing</h3>
            <p>
              Choose a suitable fertilizer based on the specific needs of your
              plants, whether it's a balanced or specialized formula.
            </p>
          </div>
        </article>
        <article className={classes.websitePictures}>
          <img src={firstPlant} draggable="false" />
          <img src={secondPlant} draggable="false" />
          <div className={classes.websiteInfo}>
            <img src={thirdPlant} draggable="false" />
            <p>
              Our website offers a wide array of stunning plants, ranging from
              vibrant flowers to lush indoor foliage, allowing you to create
              your very own green oasis. In addition to our extensive plant
              selection, we also provide gardening kits and fertilizers to equip
              you with everything you need to nurture your plants and achieve
              gardening success. But we don't stop there! We believe that
              knowledge is the key to a thriving garden, so we offer a wealth of
              information and resources on gardening techniques, plant care
              tips, and landscaping ideas. Whether you're a seasoned gardener or
              just starting your green journey, our goal is to inspire and
              support you every step of the way. Get ready to explore our
              virtual garden and discover the joys of gardening with us!
            </p>
            <button className={classes.seeMoreButton}>See more photos</button>
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;
