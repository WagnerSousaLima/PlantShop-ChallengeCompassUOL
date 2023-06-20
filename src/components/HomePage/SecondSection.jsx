import classes from "./SecondSection.module.css";

import nutrientsIcon from "./Images/Property 1=bag.svg";
import wateringIcon from "./Images/Property 1=water.svg";
import sunlightIcon from "./Images/Property 1=sun.svg";
import firstImg from "./Images/Rectangle 32.png";
import secondImg from "./Images/Rectangle 33.png";
import thirdImg from "./Images/Rectangle 34.png";

const SecondSection = () => {
  return (
    <section className={classes.moreInfo}>
      <span className={classes.titleItem}>
        <h2>
          Steps to take care of your <em>plants</em>
        </h2>
        <p>
          By following these three steps - proper watering, appropriate
          sunlight, and providing essential nutrients - you'll be well on your
          way to maintaining healthy and thriving plants.
        </p>
      </span>
      <div className={classes.firstStep}>
        <img src={wateringIcon} className={classes.wateringIcon} />
        <h3>Watering</h3>
        <p>
          Water your plants when the top inch of soil feels dry to the touch.
          Avoid overwatering, as it can lead to root dehydration.
        </p>
      </div>
      <div className={classes.secondStep}>
        <img src={sunlightIcon} className={classes.sunlightIcon} />
        <h3>Sunlight</h3>
        <p>
          Most plants need adequate sunlight to thrive. Place your plants in
          areas that receive the appropriate amount of light for their specific
          needs
        </p>
      </div>
      <div className={classes.thirdStep}>
        <img src={nutrientsIcon} className={classes.nutrientsIcon} />
        <h3>Nutrients and Fertilizing</h3>
        <p>
          Choose a suitable fertilizer based on the specific needs of your
          plants, whether it's a balanced or specialized formula.
        </p>
      </div>

      <img src={firstImg} className={classes.firstImg} draggable="false" />
      <img src={secondImg} className={classes.secondImg} draggable="false" />
      <div className={classes.websiteInfo}>
        <img src={thirdImg} className={classes.thirdImg} draggable="false" />
        <p>
          Our website offers a wide array of stunning plants, ranging from
          vibrant flowers to lush indoor foliage, allowing you to create your
          very own green oasis. In addition to our extensive plant selection, we
          also provide gardening kits and fertilizers to equip you with
          everything you need to nurture your plants and achieve gardening
          success. But we don't stop there! We believe that knowledge is the key
          to a thriving garden, so we offer a wealth of information and
          resources on gardening techniques, plant care tips, and landscaping
          ideas. Whether you're a seasoned gardener or just starting your green
          journey, our goal is to inspire and support you every step of the way.
          Get ready to explore our virtual garden and discover the joys of
          gardening with us!
        </p>
        <button className={classes.seeMoreButton}>
          <span className={classes.buttonText}>See more photos</span>
        </button>
      </div>
    </section>
  );
};

export default SecondSection;
