import React from "react";
import styles from "./AllProducts.module.css";
import { FilterByPriority } from "./FilterByPriority";

export function FilterByType(props) {
  const { selected } = props;

  const [selectedButton, setSelectedButton] = React.useState(selected);


const handleButtonClick = (button) => {
  setSelectedButton(button);
};


  return (
    <div className={styles.filterContainer}>
      <ul className={styles.filterList}>
      <li
  className={`${styles.filterItem} ${selectedButton === "all plants" ? styles.filterItemSelected : ""}`}
  onClick={() => handleButtonClick("all plants")}
>
  All Products
</li>
<li
  className={`${styles.filterItem} ${selectedButton === "best sellers" ? styles.filterItemSelected : ""}`}
  onClick={() => handleButtonClick("best sellers")}
>
  Most Popular
</li>
<li
  className={`${styles.filterItem} ${selectedButton === "on offer" ? styles.filterItemSelected : ""}`}
  onClick={() => handleButtonClick("on offer")}
>
  Offers
</li>

      </ul>
      
      <div className={styles.filter}>
        <FilterByPriority />
      </div>
    </div>
  );
}
