import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PlantRegistration.module.css";
import imageForm from "./imgs/image_Form.png";
import { toast } from "react-toastify";
import { useState } from "react";
import { api } from "../../Services/api";

function PlantRegistration() {
  const [plantData, setPlantData] = useState({
    name: "",
    type: "",
    price: "",
    discount: "",
    label: "",
    features: "",
    description: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      await api.post("/plants", plantData);
      alert("Dados enviados com sucesso!");
      setPlantData({
        name: "",
        type: "",
        price: "",
        discount: "",
        label: "",
        features: "",
        description: ""
      });
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  
    toast.success("The new plant has been registered", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
    navigate("/");
  };
  


  return (
    <div className={styles.regContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <span className={styles.formTitle}>
          <h1>
            Plant registration <hr />
          </h1>
        </span>
        <label htmlFor="name">Plant name</label>
        <input
          type="text"
          placeholder="Echinocereus Cactus"
          value={
            plantData.name
          }
          onChange={(e) =>
            setPlantData({ ...plantData, name: e.target.value })
          }
        />
        <label htmlFor="type">Plant type</label>
        <input
          type="text"
          placeholder="Cactus"
          value={plantData.type}
          onChange={(e) =>
            setPlantData({ ...plantData, type: e.target.value })
          }
        />
        <div className={styles.formPrice}>
          <span className={styles.formPriceInput}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              placeholder="$139.99"
              value={plantData.price}
              onChange={(e) =>
                setPlantData({ ...plantData, price: e.target.value })
              }
            />
          </span>
          <span className={styles.formDiscountInput}>
            <label htmlFor="discount">Discount percentage</label>
            <input
              type="number"
              placeholder="20%"
              value={
                plantData.discount
              }
              onChange={(e) =>
                setPlantData({ ...plantData, discount: e.target.value })
              }
            />
          </span>
        </div>
        <label>Label:</label>
        <div className={styles.formLabelRadio}>
          <span>
            <input
              type="radio"
              id="indoor"
              value="indoor"
              checked={plantData.label === "indoor"}
              onChange={(e) =>
                setPlantData({ ...plantData, label: e.target.value })
              }
            />
            Indoor
          </span>
          <span>
            <input
              type="radio"
              id="outdoor"
              value="outdoor"
              checked={plantData.label === "outdoor"}
              onChange={(e) =>
                setPlantData({ ...plantData, label: e.target.value })
              }
            />
            Outdoor
          </span>
        </div>
        <div className={styles.formTextInput}>
          <label htmlFor="features">Features:</label>
          <textarea
            className={styles.formFeaturesInput}
            type="text"
            id="features"
            placeholder="Species: Echinocereus..."
            value={plantData.features}
            onChange={(e) =>
              setPlantData({ ...plantData, features: e.target.value })
            }
          />
          <label htmlFor="description">Description:</label>
          <textarea
            className={styles.formDescriptionInput}
            type="text"
            id="description"
            placeholder="Ladyfinger cactus..."
            value={plantData.description}
            onChange={(e) =>
              setPlantData({ ...plantData, description: e.target.value })
            }
          />
        </div>
        <div>
          <button className={styles.registerButton} type="submit" value="Register">
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
