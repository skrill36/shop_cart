import style from "./CartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton = (props) => {
  return (
    <div className={style.div1}>
      <h1>Items in stock</h1>
      <button className={style.button}>
        <span className={style.icon}>
          <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={style.badge}>{props.items}</span>
      </button>
    </div>
  );
};

export default CartButton;
