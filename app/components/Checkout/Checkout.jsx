import { useState } from "react";
import styles from "./checkout.module.css";
import Tick from "../../assets/icons/tick.svg";
import Image from "next/image";
import BagItems from "../BagItems/BagItems";
import Delivery from "../Delivery/Delivery";
import Payments from "../Payments/Payments";
import OrderComplete from "../OrderComplete/OrderComplete";
import OrderSummary from "../OrderSummary/OrderSummary";
import DiscountTag from "../DiscountTag/DiscountTag";
import ProductsList from "../ProductsList/ProductsList";
import { formatIndianNumber } from "@/app/utils";
import useStore from "@/app/Store/store";

const Checkout = ({ loading }) => {
  const cartDetails = useStore((state) => state.cartDetails);
  const steps = ["Bag", "Delivery", "Payment", "Order Complete"];

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderContent = () => {
    switch (currentStep) {
      case 0:
        return <BagItems />;
      case 1:
        return (
          <Delivery nextStep={nextStep} />
        );
      case 2:
        return <Payments nextStep={nextStep} />;
      case 3:
        return <OrderComplete />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <>
            <div
              key={index}
              className={`${styles.stepCircle} ${
                index <= currentStep ? styles.active : ""
              }`}
            >
              {index < currentStep ? (
                <Image height={15} width={15} src={Tick} alt="tick" />
              ) : (
                index + 1
              )}
            </div>
            <div>{step}</div>
          </>
        ))}
      </div>

      <div className={styles.headingWrapper}>
        <div className={styles.heading}>{steps[currentStep]}</div>
        <div className={styles.subHeading}>
          ({cartDetails?.totalProducts} items) ₹
          {formatIndianNumber(cartDetails?.total || 0)}
        </div>
      </div>

      <div className={styles.content}>
        {renderContent()}
        <div className={styles.rightSection}>
          <OrderSummary loading={loading} />
          <DiscountTag />
          <ProductsList loading={loading} products={cartDetails?.products} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
