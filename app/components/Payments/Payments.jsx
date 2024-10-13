import { useState } from "react";
import styles from "./Payments.module.css";
import Image from "next/image";
import Upi from "../../assets/icons/upi.svg";
import Rupay from "../../assets/icons/rupay.svg";
import FingerPrint from "../../assets/icons/fingerPrint.svg";
import Visa from "../../assets/icons/visa.svg";
import CardsForm from "./CardsForm/CardsForm";
import Tabs from "../Tabs/Tabs";
import { PAYMENT_METHOD } from "@/app/constants";
import useStore from "@/app/Store/store";
import { validateUPI } from "@/app/utils";

const Payments = ({ nextStep }) => {
  const setPaymentDetails = useStore((state) => state.setPaymentDetails);

  const [activeSection, setActiveSection] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({
    nameOnCard: "",
  });
  const [validationError, setValidationError] = useState({
    upiId: false,
  });

  const handlePaymentMethods = (paymentMethod, formData) => {
    if (paymentMethod === PAYMENT_METHOD.UPI) {
      setPaymentMethod(PAYMENT_METHOD.UPI);
      if (validateUPI(upiId)) {
        setPaymentDetails({ paymentMethod, upiId });
        setValidationError((prev) => ({ ...prev, upiId: false }));
        nextStep();
      } else {
        setValidationError((prev) => ({ ...prev, upiId: true }));
        allowNextStep = false;
      }
    } else if (paymentMethod === PAYMENT_METHOD.CARD) {
      setPaymentDetails({ paymentMethod, cardDetails: formData });
      nextStep();
    } else {
      // todo...
    }
  };

  const tabs = [
    {
      name: "VPA",
      content: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <label htmlFor="vpa">Virtual Payment Address</label>
          <input
            required
            type='text'
            id='vpa'
            placeholder='Enter UPI ID'
            style={{ width: "96%", padding: "8px", marginTop: "10px" }}
            onChange={(e) => setUpiId(e.target.value)}
          />
          {validationError.upiId && (
            <p className={styles.error}>Invalid UPI ID</p>
          )}
          <button
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "10px",
            }}
            onClick={() => handlePaymentMethods(PAYMENT_METHOD.UPI)}
          >
            Pay Now 🔒
          </button>
        </div>
      ),
    },
    {
      name: "QR Code",
      content: <div>QR Code Payment Section (Coming Soon)</div>,
    },
  ];

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className={styles.container}>
      {/* Info box */}
      <div className={styles.infoBox}>
        <Image src={FingerPrint} height={15} width={15} />
        <div>
          Payments are SSL encrypted so that your credit card and payment
          details stay safe.
        </div>
      </div>

      {/* UPI Section */}
      <div className={styles.accordion}>
        <div
          className={styles.accordionHeader}
          onClick={() => toggleSection("upi")}
        >
          <span>UPI</span>
          <Image src={Upi} height={20} width={20} className={styles.upiIcon} />
        </div>
        <div
          className={`${styles.accordionContent} ${
            activeSection === "upi" ? styles.show : ""
          }`}
        >
          <Tabs tabs={tabs} />
        </div>
      </div>

      {/* Cards Section */}
      <div className={styles.accordion}>
        <div
          className={styles.accordionHeader}
          onClick={() => toggleSection("cards")}
        >
          <span>CARDS</span>
          <div className={styles.cardIcons}>
            <Image src={Visa} height={20} width={20} alt="visa" />
            <Image src={Rupay} height={20} width={20} alt="rupay" />
          </div>
        </div>
        <div
          className={`${styles.accordionContent} ${
            activeSection === "cards" ? styles.show : ""
          }`}
        >
          <CardsForm
            handlePaymentMethods={handlePaymentMethods}
            nextStep={nextStep}
            setPaymentMethod={setPaymentMethod}
          />
        </div>
      </div>

      {/* Cash On Delivery Section */}
      <div className={styles.accordion} onClick={() => toggleSection("cod")}>
        <div className={styles.accordionHeader}>
          <span>Cash On Delivery</span>
        </div>
        <div
          className={`${styles.accordionContent} ${
            activeSection === "cod" ? styles.show : ""
          }`}
        >
          <p className={styles.codDescription}>
            Pay directly to the driver upon receiving your order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payments;
