import React from "react";
import styles from "./OrderComplete.module.css";
import useStore from "@/app/Store/store";
import Image from "next/image";
import Upi from "../../assets/icons/upi.svg";
import Rupay from "../../assets/icons/rupay.svg";
import Visa from "../../assets/icons/visa.svg";
import { PAYMENT_METHOD } from "@/app/constants";

const OrderComplete = () => {
  const paymentDetails = useStore((state) => state.paymentDetails);
  const deliveryDetails = useStore((state) => state.deliveryDetails);

  console.log({ paymentDetails, deliveryDetails });
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.greetingSection}>
        <h3 className={styles.heading}>THANK YOU</h3>
        <h3 className={styles.heading}>YOUR ORDER HAS BEEN PLACED</h3>
        <div className={styles.greetMessage}>
          we recived your order and it is in process
        </div>
        <div className={styles.greetMessage}>
          {"We'll"} send you an order confirmation notification on your Mobile{" "}
          {deliveryDetails?.mobileNumber} within 5 mintues
        </div>
      </div>
      <div className={styles.yourOrderSection}>
        <h3
          style={{ margin: "0.875rem 0 -0.875rem 0" }}
          className={styles.heading}
        >
          YOUR ORDER
        </h3>
        <div className={styles.orderDetailsCardWrapper}>
          <h4 className={styles.heading}>Delivery Address</h4>
          <div className={styles.orderDetailsCard}>
            <h4 className={styles.heading}>
              {deliveryDetails?.firstName} {deliveryDetails?.lastName}
            </h4>
            <p className={styles.orderDetailsContent}>
              {" "}
              {deliveryDetails?.streetAddress}{" "}
            </p>
            <p className={styles.orderDetailsContent}>
              {" "}
              {deliveryDetails?.landmark}{" "}
            </p>
            <p className={styles.orderDetailsContent}>
              {deliveryDetails?.city} {deliveryDetails?.pinCode}
              {deliveryDetails?.state} {deliveryDetails?.country}
            </p>
            <p className={styles.orderDetailsContent}>
              {" "}
              {deliveryDetails?.mobileNumber}{" "}
            </p>
          </div>
        </div>
        <div className={styles.orderDetailsCardWrapper}>
          <h4 className={styles.heading}>Billing Address</h4>
          <div className={styles.orderDetailsCard}>
            <h4 className={styles.heading}>
              {deliveryDetails?.firstName} {deliveryDetails?.lastName}
            </h4>
            <p className={styles.orderDetailsContent}>
              {" "}
              {deliveryDetails?.streetAddress}{" "}
            </p>
            <p className={styles.orderDetailsContent}>
              {" "}
              {deliveryDetails?.landmark}{" "}
            </p>
            <p className={styles.orderDetailsContent}>
              {deliveryDetails?.city} {deliveryDetails?.pinCode}
              {deliveryDetails?.state} {deliveryDetails?.country}
            </p>
            <p className={styles.orderDetailsContent}>
              {" "}
              {deliveryDetails?.mobileNumber}{" "}
            </p>
          </div>
        </div>
        <div className={styles.orderDetailsCardWrapper}>
          <h4 className={styles.heading}>Payment Method</h4>
          <div className={styles.orderDetailsCard}>
            {paymentDetails?.paymentMethod === PAYMENT_METHOD.UPI ? (
              <Image height={50} width={50} src={Upi} alt='logo' />
            ) : paymentDetails?.paymentMethod === PAYMENT_METHOD.CARD ? (
              <>
                <Image height={50} width={50} src={Rupay} alt='logo' />
                <Image height={50} width={50} src={Visa} alt='logo' />
              </>
            ) : (
              <h4>Cash On Delivery</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
