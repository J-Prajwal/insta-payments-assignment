export const getCartItems = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_CARTS_DETAILS_URL);
  const data = await res.json();

  return data;
};
