import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext,useState,useEffect } from "react";
import axios from "axios";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  // const ctx = useContext(CartContext);

  // const totalAmount = ctx.items.reduce((currNum, item) => {
  //   return item.price * item.quantity + currNum;
  // }, 0);

  // const minusItem = (id) => {
  //   ctx.removeCart(id);
  // };
  const crtCtx = useContext(CartContext);
  //const authCtx = useContext(AuthContext);
  const [list, setList] = useState([]);
  let totalAmount = 0;

  const removeCartHandler = (id) => {
      crtCtx.removeItem(id);
  }
  const userEmailId = localStorage.getItem('email');
  useEffect(() => {
      const fetchCartItems = async() => {
         const res = await axios.get(`https://crudcrud.com/api/1db9c854df554c80aefa870ee00e0f3d /cart${userEmailId}`)
              crtCtx.items = res.data;
              setList(res.data);
      };
      fetchCartItems();
  },[userEmailId, crtCtx])


  crtCtx.items.forEach(item => {
    totalAmount = totalAmount + (Number(item.quantity) * item.price) ;
});


  const cartEle = (
    <ul>
      {crtCtx.items.map((ele) => (
        <li key={ele.title} className={classes["cart-items"]}>
          <div className={classes.summary}>
            {ele.title}
            <span className={classes.price}>${ele.price}</span>
            <span className={classes.amount}>{ele.quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={()=>removeCartHandler(ele.id)}>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onTap={props.onTap}>
      <div className={classes.act}>
        <button onClick={props.onTap}>x</button>
      </div>
      <h1 className="text-center">CART</h1>
      {cartEle}
      <div className={classes.act}>${totalAmount}</div>
    </Modal>
  );
};

export default Cart;
