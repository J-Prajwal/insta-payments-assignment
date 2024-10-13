import React, { useContext } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Sun from "../../assets/icons/sun-svgrepo-com.svg";
import Moon from "../../assets/icons/moon-stars-svgrepo-com.svg";
import CartLight from "../../assets/icons/cart-light.svg";
import CartDark from "../../assets/icons/cart-dark.svg";
import { ThemeContext } from "@/app/context/themeContext";

const Navbar = ({ heading = "checkout", cartCount }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarHeading}>{heading}</div>
      <div className={styles.navbarIconSection}>
        <Image
          priority
          src={theme === "dark" ? Sun : Moon}
          height={32}
          width={32}
          alt="Swith to light mode"
          style={{ cursor: "pointer" }}
          onClick={toggleTheme}
        />
        <div className={styles.cartSection}>
          <Image
            priority
            src={theme === "dark" ? CartLight : CartDark}
            height={32}
            width={32}
            alt="shopping cart"
            style={{ cursor: "pointer" }}
          />
          <div className={styles.cartCountBlob}>{cartCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
