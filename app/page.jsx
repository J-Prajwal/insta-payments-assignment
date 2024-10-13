"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./context/themeContext";
import Checkout from "./components/Checkout/Checkout";
import { getCartItems } from "./utils/api";
import useStore from "./Store/store";

export default function Home() {
  const setCartDetails = useStore((state) => state.setCartDetails);
  const [theme, setTheme] = useState("dark");
  // const [cartDetails, setCartDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCartItems()
      .then((res) => {
        setLoading(true);
        setCartDetails(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);
  return (
    <ThemeProvider>
      <Navbar
        heading={"checkout"}
        setTheme={setTheme}
        theme={theme}
      />
      <Checkout loading={loading} error={error} />
    </ThemeProvider>
  );
}
