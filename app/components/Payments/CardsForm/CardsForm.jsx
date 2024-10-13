import React, { useState } from "react";
import Styles from "./CardsForm.module.css";
import { PAYMENT_METHOD } from "@/app/constants";
import useStore from "@/app/Store/store";

const CardsForm = ({ handlePaymentMethods, setPaymentMethod}) => {
  const [form, setForm] = useState({
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    let formErrors = {};

    if (!form.nameOnCard.trim()) {
      formErrors.nameOnCard = "Name on card is required";
    }

    if (!form.cardNumber.trim()) {
      formErrors.cardNumber = "Card number is required";
    }

    if (!form.expiryDate.trim()) {
      formErrors.expiryDate = "Expiry date is required";
    }

    if (!form.cvv.trim()) {
      formErrors.cvv = "Country is required";
    }

    if (form.cvv.trim().length > 3) {
      formErrors.cvv = "Max length allowed is 3";
    }

    if (form.cardNumber.trim().length > 16) {
      formErrors.cardNumber = "Max length allowed is 16";
    }
    if (form.cardNumber.trim().length < 16) {
      formErrors.cardNumber = "Minimum 16 characters required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handlePaymentMethods(PAYMENT_METHOD.CARD, form);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <div className={Styles.formFieldLong}>
          {/* Name on Card */}
          <div className={Styles.field}>
            <label>Name on Card</label>
            <input
              type="text"
              name="nameOnCard"
              placeholder="John Doe"
              value={form.nameOnCard}
              onChange={handleChange}
              className={Styles.input}
            />
            {errors.nameOnCard && (
              <p className={Styles.error}>{errors.nameOnCard}</p>
            )}
          </div>

          {/* Card Number */}
          <div className={Styles.field}>
            <label>Card Number</label>
            <input
              type="number"
              name="cardNumber"
              placeholder="Card number"
              value={form.cardNumber}
              onChange={handleChange}
              className={Styles.input}
            />
            {errors.cardNumber && (
              <p className={Styles.error}>{errors.cardNumber}</p>
            )}
          </div>
        </div>

        {/* Expiry Date */}
        <div className={Styles.field}>
          <label>Expiry Date</label>
          <input
            type="year"
            name="expiryDate"
            placeholder="MM/YY"
            value={form.expiryDate}
            onChange={handleChange}
            className={Styles.input}
          />
          {errors.expiryDate && (
            <p className={Styles.error}>{errors.expiryDate}</p>
          )}
        </div>

        <div className={Styles.formFieldLong}>
          {/* CVV/CVC */}
          <div className={Styles.field}>
            <label>CVV/CVC</label>
            <input
              type="number"
              name="cvv"
              placeholder="Enter cvv"
              value={form.cvv}
              onChange={handleChange}
              className={Styles.input}
            />
            {errors.cvv && <p className={Styles.error}>{errors.cvv}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          onClick={() => setPaymentMethod(PAYMENT_METHOD.CARD)}
          className={Styles.button}
        >
          Pay Now
        </button>
      </form>
    </>
  );
};

export default CardsForm;
