import React, { useEffect, useState } from "react";
import CardPlant from "../HomeCarousel/Card/CardPlant";
import { api } from "../../Services/api";
import styles from "./AllProducts.module.css";

export function AllProducts() {
  const [selectedButton, setSelectedButton] = useState("order by");
  const [plants, setPlants] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState("A-Z");
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    api.get("/plants").then((response) => {
      setPlants(response.data);
      setFilteredProducts(response.data);
    });
  }, []);

  useEffect(() => {
    let sortedProducts = [...plants];

    if (sortBy === "A-Z") {
      sortedProducts = sortedProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (sortBy === "Z-A") {
      sortedProducts = sortedProducts.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    } else if (sortBy === "Maior Preço") {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Menor Preço") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(sortedProducts);
  }, [sortBy, plants]);

  const handleSortBy = (option) => {
    setSortBy(option);
    setHoveredButton(null);
  };

  const handleHover = (option) => {
    setHoveredButton(option);
  };

  const handleLeave = () => {
    setHoveredButton(null);
  };

  const isSelectedButton = (button) => {
    return selectedButton === button ? styles.selected : "";
  };

  return (
    <div className={styles.allProducts}>
      <div className={styles.filterContainer}>
        <button
          className={`${styles.filterButton} ${selectedButton === "A-Z" ? styles.selected : ""}`}
          onClick={() => setSelectedButton("order by")}
          onMouseEnter={() => handleHover("order by")}
          onMouseLeave={handleLeave}
        >
          Order by your preferences:
        </button>
        {selectedButton === "order by" && (
          <div className={styles.filterButtonContainer}>
            <button
              className={`${styles.filterButton} ${isSelectedButton("A-Z")} ${hoveredButton === "A-Z" ? styles.hovered : ""}`}
              onClick={() => handleSortBy("A-Z")}
              onMouseEnter={() => handleHover("A-Z")}
              onMouseLeave={handleLeave}
            >
              Sort A-Z
            </button>
            <button
              className={`${styles.filterButton} ${isSelectedButton("Z-A")} ${hoveredButton === "Z-A" ? styles.hovered : ""}`}
              onClick={() => handleSortBy("Z-A")}
              onMouseEnter={() => handleHover("Z-A")}
              onMouseLeave={handleLeave}
            >
              Sort Z-A
            </button>
            <button
              className={`${styles.filterButton} ${isSelectedButton("Maior Preço")} ${hoveredButton === "Maior Preço" ? styles.hovered : ""}`}
              onClick={() => handleSortBy("Maior Preço")}
              onMouseEnter={() => handleHover("Maior Preço")}
              onMouseLeave={handleLeave}
            >
              Sort Price (High to Low)
            </button>
            <button
              className={`${styles.filterButton} ${isSelectedButton("Menor Preço")} ${hoveredButton === "Menor Preço" ? styles.hovered : ""}`}
              onClick={() => handleSortBy("Menor Preço")}
              onMouseEnter={() => handleHover("Menor Preço")}
              onMouseLeave={handleLeave}
            >
              Sort Price (Low to High)
            </button>
          </div>
        )}
      </div>
      <div className={styles.cardGrid}>
        {filteredProducts.map((plant) => (
          <CardPlant
            key={plant.id}
            name={plant.name}
            price={plant.price}
            discount={plant.discount}
            label={plant.label}
          />
        ))}

        <footer />
      </div>
    </div>
  );
}
