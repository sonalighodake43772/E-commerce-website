import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./store/cart-context";
const Items = () => {
  const cartctx = useContext(CartContext);

  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 250,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  let quantity = 0;
  const addToCart = (item) => {
    // e.preventDefault()
    // console.log('added to cart')
    quantity = quantity + 1;
    // console.log(quantity)
    cartctx.addItem({ ...item, quantity: quantity });
    //   const quantity=
  };

  return (
    <div>
      <h1 className="text-center p-4 mb-5 bg-warning text-white ">Music</h1>

      {productsArr.map((item) => (
        <div key={item.title} className="text-center" id={item.title}>
          <h2>{item.title}</h2>
          <Link to={`/store/${item.title}`}>
            <img src={item.imageUrl} alt={item.title}></img>
          </Link>

          <h3>${item.price}</h3>
          <button
            type="button"
            className="btn btn-info"
            onClick={addToCart.bind(null, item)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Items;