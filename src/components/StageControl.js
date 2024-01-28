import { useEffect, useState } from "react";
import styles from "../styles/StageControl.module.css";
import { changeStage } from "../actions";
function StageControl({ store }) {
  const [placedOrders, setPlacedOrders] = useState([]);
  const [preparingOrders, setPreparingOrders] = useState([]);
  const [readyOrders, setReadyOrders] = useState([]);
  const [pickedOrders, setPickedOrders] = useState([]);

  store.subscribe(() => {
    const orders = store.getState().orders;
    setPlacedOrders(orders.filter((item) => item.stage === "placed"));
    setPreparingOrders(orders.filter((item) => item.stage === "preparing"));
    setReadyOrders(orders.filter((item) => item.stage === "ready"));
    setPickedOrders(store.getState().completedOrders);
  });
  return (
    <div className={styles.display}>
      <div className={styles.orderPlacedBox}>
        <div className={styles.boxHeading}>Placed orders</div>
        <div className={styles.orderItemsDisplay}>
          {placedOrders.map((item) => (
            <OrderItem item={item} store={store} />
          ))}
        </div>
      </div>
      <div className={styles.orderPreparingBox}>
        <div className={styles.boxHeading}>Orders being prepared</div>
        <div className={styles.orderItemsDisplay}>
          {preparingOrders.map((item) => (
            <OrderItem item={item} store={store} />
          ))}
        </div>
      </div>
      <div className={styles.orderReadyBox}>
        <div className={styles.boxHeading}>Orders Ready</div>
        <div className={styles.orderItemsDisplay}>
          {readyOrders.map((item) => (
            <OrderItem item={item} store={store} />
          ))}
        </div>
      </div>
      <div className={styles.orderPickedBox}>
        <div className={styles.boxHeading}>Orders picked</div>
        <div className={styles.orderItemsDisplay}>
          {pickedOrders.map((item) => (
            <div className={styles.orderItem}>
              <div>Order Number: {item.id}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OrderItem({ item, store }) {
  const [time, setTime] = useState("0 min 1 sec");
  const [overdue, setOverdue] = useState(false);
  const DynamicStyles = {
    backgroundColor: overdue ? "rgb(192, 108, 108)" : "white",
  };
  let newStage;
  switch (item.stage) {
    case "placed":
      newStage = "preparing";
      break;
    case "preparing":
      newStage = "ready";
      break;
    case "ready":
      newStage = "picked";
      break;
    default:
      break;
  }

  function handleNext() {
    store.dispatch(changeStage(item.id, newStage));
  }

  // useEffect(() => {
  //   let secs = 1;
  //   let mins = 0;

  //   const interval = setInterval(() => {
  //     secs++;
  //     if (secs === 60) {
  //       secs = 0;
  //       mins++;
  //     }
  //     if (
  //       ((mins >= 3 && item.size === "small") ||
  //         (mins >= 4 && item.size === "medium") ||
  //         (mins >= 5 && item.size === "large")) &&
  //       !overdue
  //     ) {
  //       setOverdue(true);
  //     }
  //     setTime(mins + " min " + secs + " sec");
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Date.now() - item.timeUpdated;
      const secs = Math.round(diff / 1000) % 60;
      const mins = Math.floor(diff / (1000 * 60));
      if (
        (mins >= 3 && item.size === "small") ||
        (mins >= 4 && item.size === "medium") ||
        (mins >= 5 && item.size === "large")
      ) {
        setOverdue(true);
      } else {
        setOverdue(false);
      }
      setTime(mins + " min " + secs + " sec");
    }, 1000);
    return () => clearInterval(interval);
  }, [item]);

  return (
    <div className={styles.orderItem} style={DynamicStyles}>
      <div>Order Number: {item.id}</div>
      <div>{time}</div>
      <button className={styles.nextBtn} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default StageControl;
