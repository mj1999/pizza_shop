import styles from "../styles/OrderInfo.module.css";
function OrderInfo() {
  return (
    <div className={styles.display}>
      <div className={styles.tableHeader}>
        <span>Order ID</span>
        <span>Stage</span>
        <span>Time Elapsed</span>
        <span>Actions</span>
      </div>
    </div>
  );
}

export default OrderInfo;
