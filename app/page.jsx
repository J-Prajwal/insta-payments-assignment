"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./context/themeContext";
import Checkout from "./components/Checkout/Checkout";
import { getCartItems } from "./utils/api";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [cartDetails, setCartDetails] = useState(null);
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
        cartCount={cartDetails?.totalProducts || 0}
      />
      <Checkout loading={loading} error={error} cartDetails={cartDetails} />
    </ThemeProvider>
  );
}
