import React, { useState } from "react";
import styles from "./AllProducts.module.css";

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleUpdatePriority = (value) => {
    setSelectedButton(value);
    setIsOpen(false);
  };
  

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterButtonContainer}>
        <button className={styles.filterButton} onClick={handleOpen}>
          Organizar por
          <span className={styles.arrowIcon}></span>
        </button>
        {isOpen && (
          <ul className={styles.filterOptions}>
           <li onClick={() => handleUpdatePriority("maior-menor")}>
            Preço: Maior - Menor
          </li>
          <li onClick={() => handleUpdatePriority("menor-maior")}>
            Preço: Menor - Maior
          </li>

          </ul>
        )}
      </div>
    </div>
  );
}           
