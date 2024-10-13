import React from "react";
import styles from "./ProductsList.module.css";
import Image from "next/image";
import { formatIndianNumber } from "@/app/utils";
import useStore from "@/app/Store/store";

const ProductsList = () => {
  const products = useStore((state) => state.cartDetails.products);
  return (
    <>
      {products &&
        products.length > 0 &&
        products.map((el, i) => (
          <div key={i} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <Image
                src={el.thumbnail}
                height={100}
                width={100}
                alt="thumbnail"
              />
            </div>
            <div className={styles.productInfoContainer}>
              <div className={styles.title}>{el.title}</div>
              <div className={styles.cost}>₹{formatIndianNumber(el.price)}</div>
              <div className={styles.quantity}>Quantity: {el.quantity}</div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductsList;
