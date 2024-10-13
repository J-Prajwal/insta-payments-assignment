import React, { useState } from "react";
import Styles from "./Delivery.module.css";
import useStore from "@/app/Store/store";

const Delivery = ({ nextStep }) => {
  const setDeliveryDetails = useStore((state) => state.setDeliveryDetails);
  const deliveryDetails = useStore((state) => state.deliveryDetails);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    landmark: "",
    country: "",
    state: "",
    city: "",
    pinCode: "",
    mobileNumber: "",
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    let formErrors = {};

    if (!form.firstName.trim()) {
      formErrors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      formErrors.lastName = "Last name is required";
    }

    if (!form.streetAddress.trim()) {
      formErrors.streetAddress = "Street address is required";
    }

    if (!form.country.trim()) {
      formErrors.country = "Country is required";
    }

    if (!form.state.trim()) {
      formErrors.state = "State is required";
    }

    if (!form.city.trim()) {
      formErrors.city = "City is required";
    }

    if (!/^\d{6}$/.test(form.pinCode)) {
      formErrors.pinCode = "Pin code must be 6 digits";
    }

    if (!/^\d{10}$/.test(form.mobileNumber)) {
      formErrors.mobileNumber = "Mobile number must be 10 digits";
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
      setDeliveryDetails(form);
      nextStep();
      console.log("Form submitted successfully", form);
    }
  };
  return (
    <>
      <div className={Styles.formWrapper}>
        <h3 className={Styles.heading}>ADDRESS</h3>
        <form onSubmit={handleSubmit} className={Styles.form}>
          <div className={Styles.formFieldLong}>
            {/* First Name */}
            <div className={Styles.field}>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                className={Styles.input}
              />
              {errors.firstName && (
                <p className={Styles.error}>{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div className={Styles.field}>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                className={Styles.input}
              />
              {errors.lastName && (
                <p className={Styles.error}>{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Street Address */}
          <div className={Styles.field}>
            <label>Street Address</label>
            <input
              type="text"
              name="streetAddress"
              placeholder="Enter street address"
              value={form.streetAddress}
              onChange={handleChange}
              className={Styles.input}
            />
            {errors.streetAddress && (
              <p className={Styles.error}>{errors.streetAddress}</p>
            )}
          </div>

          {/* Landmark */}
          <div className={Styles.field}>
            <label>Landmark</label>
            <input
              type="text"
              name="landmark"
              placeholder="Enter landmark"
              value={form.landmark}
              onChange={handleChange}
              className={Styles.input}
            />
          </div>

          <div className={Styles.formFieldLong}>
            {/* Country */}
            <div className={Styles.field}>
              <label>Country</label>
              <input
                type="text"
                name="country"
                placeholder="Enter country"
                value={form.country}
                onChange={handleChange}
                className={Styles.input}
              />
              {errors.country && (
                <p className={Styles.error}>{errors.country}</p>
              )}
            </div>

            {/* State */}
            <div className={Styles.field}>
              <label>State</label>
              <input
                type="text"
                name="state"
                placeholder="Enter state"
                value={form.state}
                onChange={handleChange}
                className={Styles.input}
              />
              {errors.state && <p className={Styles.error}>{errors.state}</p>}
            </div>
          </div>

          <div className={Styles.formFieldLong}>
            {/* City */}
            <div className={Styles.field}>
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                value={form.city}
                onChange={handleChange}
                className={Styles.input}
              />
              {errors.city && <p className={Styles.error}>{errors.city}</p>}
            </div>

            {/* Pin Code */}
            <div className={Styles.field}>
              <label>Pin Code</label>
              <input
                type="number"
                name="pinCode"
                placeholder="Enter pin code"
                value={form.pinCode}
                onChange={handleChange}
                className={Styles.input}
              />
              {errors.pinCode && (
                <p className={Styles.error}>{errors.pinCode}</p>
              )}
            </div>
          </div>

          {/* Mobile Number */}
          <div className={Styles.field}>
            <label>Mobile Number</label>
            <input
              type="number"
              name="mobileNumber"
              placeholder="Enter mobile number"
              value={form.mobileNumber}
              onChange={handleChange}
              className={Styles.input}
            />
            <p className={Styles.disclaimer}>
              We will only call you if there are questions regarding your order.
            </p>
            {errors.mobileNumber && (
              <p className={Styles.error}>{errors.mobileNumber}</p>
            )}
          </div>

          {/* Pay Now Button */}
          <button type="submit" className={Styles.button}>
            Pay Now
          </button>
        </form>
      </div>
    </>
  );
};

export default Delivery;
