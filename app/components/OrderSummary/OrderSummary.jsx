import React from "react";
import Styles from "./OrderSummary.module.css";
import Loader from "../Loader/Loader";
import useStore from "@/app/Store/store";
import { formatIndianNumber } from "@/app/utils";

const OrderSummary = ({ loading }) => {
  const cartDetails = useStore((state) => state.cartDetails);
  return (
    <div className={Styles.mainWrapper}>
      {loading || !cartDetails?.total ? (
        <div className={Styles.loaderWrapper}>
          <Loader />
        </div>
      ) : (
        <>
          <div className={Styles.heading}>order summary</div>
          <div className={Styles.summaryTable}>
            <table className={Styles.table}>
              <tr className={Styles.tableRow}>
                <td className={Styles.tableColumnLeft}>order amount</td>
                <td className={Styles.tableColumnRight}>₹ {formatIndianNumber(cartDetails?.total)}</td>
              </tr>
              <tr className={Styles.tableRow}>
                <td className={Styles.tableColumnLeft}>Discount</td>
                <td className={Styles.tableColumnRight}>
                  ₹ -{formatIndianNumber(Math.round(cartDetails?.total - cartDetails?.discountedTotal))}
                </td>
              </tr>
            </table>
          </div>
          <div className={Styles.totalWrapper}>
            <div className={Styles.totalKeyWrapper}>
              <div className={Styles.totalKey}>Total</div>
              <div className={Styles.infoMessage}>(Exclusize of all taxes)</div>
            </div>
            <div className={Styles.totalValue}>₹ {formatIndianNumber(cartDetails?.discountedTotal)}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderSummary;
