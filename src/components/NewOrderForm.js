import { useState } from "react";
import styles from "../styles/OrderForm.module.css";

function NewOrderForm({ setVisible }) {
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [base, setBase] = useState("");
  return (
    <form
      className={styles.display}
      onSubmit={(e) => {
        e.preventDefault();
        if (!type || !size || !base) {
          alert("Select all options please");
          return;
        }
        console.log(type + " " + size + " " + base);
        setVisible(false);
      }}
    >
      <div className={styles.options}>
        <div className={styles.optionDesc}>Pizza Type:</div>
        <div
          className={styles.optionItems}
          onClick={() => {
            setType("veg");
          }}
        >
          <label htmlFor="veg">
            <img
              height="100%"
              width="100%"
              src="https://cdn1.iconfinder.com/data/icons/flat-green-organic-natural-badges/500/Vegetarian-2-512.png"
              alt="vegetarion-icon"
            />
          </label>
          <input type="radio" id="veg" name="type" value="veg" />
        </div>
        <div
          className={styles.optionItems}
          onClick={() => {
            setType("nonveg");
          }}
        >
          <label htmlFor="nonveg">
            <img
              height="100%"
              width="100%"
              src="https://cdn-icons-png.flaticon.com/512/2620/2620208.png"
              alt="nonvegetarion-icon"
            />
          </label>
          <input type="radio" id="nonveg" name="type" value="nonveg" />
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.optionDesc}>Pizza Size:</div>
        <div
          className={styles.optionItems}
          onClick={() => {
            setSize("small");
          }}
        >
          <label htmlFor="small">
            <img
              height="50%"
              width="100%"
              style={{ transform: "scale(0.6)" }}
              src="https://th.bing.com/th/id/OIP.GVOfPlWXZQspu1JVNKwsNQHaHb?rs=1&pid=ImgDetMain"
              alt="small-size-icon"
            />
          </label>
          <div style={{ textAlign: "center", color: "rgb(90, 90, 90)" }}>
            7"
          </div>
          <input type="radio" id="small" name="size" value="small" />
        </div>
        <div
          className={styles.optionItems}
          onClick={() => {
            setSize("medium");
          }}
        >
          <label htmlFor="medium">
            <img
              height="100%"
              width="100%"
              style={{ transform: "scale(0.8)" }}
              src="https://th.bing.com/th/id/OIP.GVOfPlWXZQspu1JVNKwsNQHaHb?rs=1&pid=ImgDetMain"
              alt="medium-size-icon"
            />
          </label>
          <div style={{ textAlign: "center", color: "rgb(90, 90, 90)" }}>
            10"
          </div>
          <input type="radio" id="medium" name="size" value="medium" />
        </div>
        <div
          className={styles.optionItems}
          onClick={() => {
            setSize("large");
          }}
        >
          <label htmlFor="large">
            <img
              height="100%"
              width="100%"
              src="https://th.bing.com/th/id/OIP.GVOfPlWXZQspu1JVNKwsNQHaHb?rs=1&pid=ImgDetMain"
              alt="large-size-icon"
            />
          </label>
          <div style={{ textAlign: "center", color: "rgb(90, 90, 90)" }}>
            12"
          </div>
          <input type="radio" id="large" name="size" value="large" />
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.optionDesc}>Base(Thin/Thick):</div>
        <div
          className={styles.optionItems}
          onClick={() => {
            setBase("thin");
          }}
        >
          <label htmlFor="thin">
            <img
              height="100%"
              width="100%"
              src="https://www.pinclipart.com/picdir/big/538-5384646_pizza-slice-pizza-icon-png-clipart.png"
              alt="thin-base-icon"
            />
          </label>
          <input type="radio" id="thin" name="base" value="thin" />
        </div>
        <div
          className={styles.optionItems}
          onClick={() => {
            setBase("thick");
          }}
        >
          <label htmlFor="thick">
            <img
              height="100%"
              width="100%"
              src="https://static.vecteezy.com/system/resources/previews/000/553/406/non_2x/pizza-slice-vector-icon.jpg"
              alt="thick-base-icon"
            />
          </label>
          <input type="radio" id="thick" name="base" value="thick" />
        </div>
      </div>
      <button className={styles.orderbtn} type="submit">
        Place Order
      </button>
    </form>
  );
}

export default NewOrderForm;
