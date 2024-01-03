import React from "react";
import styles from "styles/new-product.module.scss";

interface P {
  onTabClick: (value: any) => void;
  defaultTab?: string;
}

const ProductDetailTab = ({ defaultTab, onTabClick }: P) => {
  return (
    <ul className={styles.tabss}>
      {tabsArray.map((data, index) => (
        <li
          key={index}
          onClick={() => onTabClick(data.name)}
          style={{
            color: defaultTab === data.name ? " #ff7035" : "",
            borderBottomColor: defaultTab === data.name ? "#ff7035" : "",
            fontWeight: defaultTab === data.name ? "500" : "",
          }}
        >
          {data.name}
        </li>
      ))}
    </ul>
  );
};
export default ProductDetailTab;

const tabsArray = [
  { name: "Overview" },
  { name: "Dimensions" },
  { name: "Reviews" },
  { name: "Terms & Conditions" },
];
