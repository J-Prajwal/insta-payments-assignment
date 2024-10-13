export const formatIndianNumber = (num) => {
  const numStr = num.toString().split(".");
  let integerPart = numStr[0];
  const decimalPart = numStr[1] ? "." + numStr[1] : "";

  const lastThreeDigits = integerPart.slice(-3);
  const otherDigits = integerPart.slice(0, -3);

  if (otherDigits !== "") {
    integerPart =
      otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThreeDigits;
  }

  return integerPart + decimalPart;
};

export const validateUPI = (upiId) => {
  const upiRegex = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;

  return upiRegex.test(upiId);
};
