import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PlantRegistration.module.css";
import imageForm from "./imgs/image_Form.png";
import { toast } from "react-toastify";

function PlantRegistration() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de processamento do formulário...

    toast.success("The new plant has been registered", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });

    navigate("/"); 
  };

  return (
    <div className={styles.regContainer} onSubmit={handleSubmit}>
      <form className={styles.formContainer}>
        <span className={styles.formTitle}>
          <h1>
            Plant registration <hr />
          </h1>
        </span>
        <label htmlFor="name">Plant name</label>
        <input type="text" placeholder="Echinocereus Cactus" />

        <label htmlFor="type">Plant type</label>
        <input type="text" placeholder="Cactus" />

        <div className={styles.formPrice}>
          <span className={styles.formPriceInput}>
            <label htmlFor="price">Price</label>
            <input type="number" placeholder="$139.99" />
          </span>

          <span className={styles.formDiscountInput}>
            <label htmlFor="discount">Discount percentage</label>
            <input type="number" placeholder="20%" />
          </span>
        </div>

        <label>Label:</label>
        <div className={styles.formLabelRadio}>
          <span>
            <input type="radio" id="indoor" value="Label" /> Indoor
          </span>
          <span>
            <input type="radio" id="outdoor" value="Label" /> Outdoor
          </span>
        </div>

        <div className={styles.formTextInput}>
          <label htmlFor="Label">Features:</label>
          <textarea
            rows="4"
            className={styles.formFeaturesInput}
            type="text"
            id="feature"
            placeholder="Species: Echinocereus..."
          />

          <label htmlFor="Label">Description:</label>
          <textarea
            rows="4"
            className={styles.formDescriptionInput}
            type="text"
            id="description"
            placeholder="Ladyfinger cactus..."
          />
        </div>
        <div>
          <button
            className={styles.registerButton}
            type="submit"
            value="Register"
          >
            <span className={styles.registerButtonText}>Register</span>
          </button>
        </div>
      </form>
      <span className={styles.formImage}>
        <img src={imageForm} alt="background image" draggable="false" />
      </span>
    </div>
  );
};

export default PlantRegistration;
