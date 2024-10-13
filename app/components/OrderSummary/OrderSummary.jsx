import React from "react";
import Styles from "./OrderSummary.module.css";
import Loader from "../Loader/Loader";

const OrderSummary = ({ loading, total, discountedTotal }) => {
  return (
    <div className={Styles.mainWrapper}>
      {loading || !total ? (
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
                <td className={Styles.tableColumnRight}>₹ {total}</td>
              </tr>
              <tr className={Styles.tableRow}>
                <td className={Styles.tableColumnLeft}>delivery fees</td>
                <td className={Styles.tableColumnRight}>₹ 80.50</td>
              </tr>
              <tr className={Styles.tableRow}>
                <td className={Styles.tableColumnLeft}>Discount</td>
                <td className={Styles.tableColumnRight}>
                  ₹ -{Math.round(total - discountedTotal)}
                </td>
              </tr>
            </table>
          </div>
          <div className={Styles.totalWrapper}>
            <div className={Styles.totalKeyWrapper}>
              <div className={Styles.totalKey}>Total</div>
              <div className={Styles.infoMessage}>(Exclusize of all taxes)</div>
            </div>
            <div className={Styles.totalValue}>₹ {discountedTotal}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderSummary;
