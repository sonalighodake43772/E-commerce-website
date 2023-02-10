import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";


const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    review:4.8
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    review:3.9
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    review:3.7
  },
  {
    title: "Blue Color",
    price: 250,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    review:2.8
  },
];
const Products = () => {
   
  
  const { title } = useParams();

  const items = productsArr.find((item) => {
    return item.title === title;
  });

  //console.log(items.title);
 

  return (
    <section>
      <Container>
        <h1 className="text-center"> Products Details </h1>
        <h3>{items.title}</h3>
        <img src={items.imageUrl} alt={items.price}></img>
        <h3>Price: {items.price}</h3>
        <h2>Reviews -{items.review}</h2>
       


      </Container>
    </section>
  );
};
export default Products;