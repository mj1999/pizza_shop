import { useState } from "react";
import styles from "../styles/App.module.css";
import NewOrderForm from "./NewOrderForm";
import OrderInfo from "./OrderInfo";
function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className={styles.display}>
      <div className={styles.leftBox}>
        <OrderInfo />
      </div>
      <div className={styles.rightBox}></div>
      <div
        className={styles.addOrder}
        onClick={() => {
          setShowForm(true);
        }}
      ></div>
      {showForm ? <NewOrderForm setVisible={setShowForm} /> : ""}
    </div>
  );
}

export default App;
