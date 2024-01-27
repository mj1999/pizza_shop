import { useEffect, useState } from "react";
import styles from "../styles/OrderInfo.module.css";
function OrderInfo({ store }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(store.getState());
  }, []);
  store.subscribe(() => {
    setItems(store.getState());
  });
  return (
    <div className={styles.display}>
      <div className={styles.tableHeader}>
        <span>Order ID</span>
        <span>Stage</span>
        <span>Time Elapsed</span>
        <span>Actions</span>
      </div>
      {items.map((item, id) => (
        <div className={styles.item}>
          <OrderItem item={item} id={id} />
        </div>
      ))}
    </div>
  );
}

function OrderItem({ item, id }) {
  return (
    <>
      <span>{id}</span>
      <span style={{ marginRight: "4%" }}>{"Order " + item.stage}</span>
      <span style={{ marginRight: "4%" }}>Time Elapsed</span>
      <button className={styles.cancelBtn}>Cancel</button>
    </>
  );
}

export default OrderInfo;
