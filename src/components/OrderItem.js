import { useEffect, useState } from "react";
import styles from "../styles/OrderInfo.module.css";
import { removeOrder } from "../actions";

function OrderItem({ item, store }) {
  const [time, setTime] = useState("0 min 1 sec");

  function handleCancel() {
    if (item.stage !== "placed" && item.stage !== "preparing") {
      return;
    }
    store.dispatch(removeOrder(item.id));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Date.now() - item.timeCreated;
      const secs = Math.round(diff / 1000) % 60;
      const mins = Math.floor(diff / (1000 * 60));
      setTime(mins + " min " + secs + " sec");
    }, 1000);
    return () => clearInterval(interval);
  }, [item.timeCreated]);
  return (
    <>
      <span>{item.id}</span>
      <span style={{ marginRight: "4%" }}>{"Order " + item.stage}</span>
      <span style={{ marginRight: "4%" }}>{time}</span>
      {item.stage === "placed" || item.stage === "preparing" ? (
        <button className={styles.cancelBtn} onClick={handleCancel}>
          Cancel
        </button>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default OrderItem;
