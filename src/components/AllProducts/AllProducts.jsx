import React, { useEffect, useState } from "react";
import CardPlant from "../HomeCarousel/Card/CardPlant";
import { api } from '../../Services/api';
import { FilterByType } from "./FilterByType";
import styles from "./AllProducts.module.css";


export function AllProducts() {
  const [selectedButton, setSelectedButton] = useState("all");
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    api.get('./plants').then((response) => {
      setPlants(response.data);
    });
  }, []);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const filteredProducts = plants.filter((plant) => {
    if (selectedButton === "best sellers") {
      return !plant.discount || plant.discount === 0;
    } else if (selectedButton === "offers") {
      return plant.discount > 0;
    } else {
      return true; // Mostrar todos os produtos
    }
  });
  

  return (
    <>
      <FilterByType
        selected={selectedButton}
        handleButtonClick={handleButtonClick}
      />

      <div className={styles.cardGrid}> {/* Container da grade */}
        {filteredProducts.map((plants) => (
          <CardPlant
            key={plants.id}
            name={plants.name}
            price={plants.price}
            discount={plants.discount}
            label={plants.label}
          />
        ))}
      </div>
    </>
  );
}
