import { useState } from "react";
import styles from "../styles/OrderInfo.module.css";
import OrderItem from "./OrderItem";

function OrderInfo({ store }) {
  const [items, setItems] = useState([]);
  store.subscribe(() => {
    const orders = store
      .getState()
      .orders.sort((a, b) => a.timeCreated - b.timeCreated);
    setItems(orders);
  });
  return (
    <div className={styles.display}>
      <div className={styles.tableHeader}>
        <span>Order No.</span>
        <span>Stage</span>
        <span>Time Elapsed</span>
        <span>Actions</span>
      </div>
      {items.map((item, id) => (
        <div className={styles.item}>
          <OrderItem store={store} item={item} id={id} />
        </div>
      ))}
      <div className={styles.completedOrders}>
        Completed Orders : {store.getState().completedOrders.length}
      </div>
    </div>
  );
}

export default OrderInfo;
