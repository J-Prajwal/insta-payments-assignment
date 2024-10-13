import React from "react";
import styles from "./DiscountTag.module.css";
import Image from "next/image";
import Confetti from "../../assets/icons/confetti.svg";

const DiscountTag = () => {
  return (
    <div className={styles.tagWrapper}>
      <Image src={Confetti} height={15} width={15} alt="discount confetti" />
      <div>
        Discount of <span className={styles.discountApplied}>10% Applied </span>
        for new users.
      </div>
    </div>
  );
};

export default DiscountTag;
