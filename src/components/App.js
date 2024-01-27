import { useState } from "react";
import { createStore } from "redux";
//didnt knew about wether its specified to use redux or redux toolkit so went with redux

import styles from "../styles/App.module.css";
import NewOrderForm from "./NewOrderForm";
import OrderInfo from "./OrderInfo";
import orders from "../reducers";

const store = createStore(orders);

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className={styles.display}>
      <div className={styles.leftBox}>
        <OrderInfo store={store} />
      </div>
      <div className={styles.rightBox}></div>
      <div
        className={styles.addOrder}
        onClick={() => {
          setShowForm(true);
        }}
      ></div>
      {showForm ? <NewOrderForm setVisible={setShowForm} store={store} /> : ""}
    </div>
  );
}

export default App;
