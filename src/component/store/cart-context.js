import React, { useState,useEffect } from "react";
import axios from "axios";

const CartContext = React.createContext({
  // items: [],
  // productsQuantity: 0,
  // addItem: (item) => {},
  // removeCart: (id) => {},
  items: [],
  productsQuantity: 0,
  addItem: (item) => {},
  removeItem: (id)=> {},
});

export const CartContextProvider = (props) => {
  // const [items, setItems] = useState([]);
  const [products, updateProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
    //const authCtx = useContext(AuthContext);

    const userEmailId = localStorage.getItem('email');

    useEffect(() => {
        const productsQuantityHandler = () => {
            const itemsArray = [...products];
            const quantity = itemsArray.reduce((accum, item) => {
                return accum+item.quantity;
            },0);
            setQuantity(quantity);
        };
        productsQuantityHandler();
    },[products]);
    

    const addItemHandler = async(item) => {
        let itemsPresent = false;
       const newItemArray = [...products];
       console.log(newItemArray);
       const url = `https://crudcrud.com/api/1db9c854df554c80aefa870ee00e0f3d /cart${userEmailId}`
       /*newItemArray.forEach((element,index) => {
        if(item.id === element.id){
            itemsPresent = true;
            newItemArray[index].quantity = Number(item.quantity) + Number(newItemArray[index].quantity);
        }
       })*/
       if(itemsPresent === false){
        try{
            const response = await axios.post(url,item)
            updateProducts([...products, response.data]);
            console.log(response)
        }
        catch (err){
            console.log(err)
        }
       }else{
        try{
            const updatedItem = newItemArray.forEach((element,index) => {
                if(item.id === element.id){
                    itemsPresent = true;
                    newItemArray[index].quantity = Number(item.quantity) + Number(newItemArray[index].quantity);
                }
            })
            let temp = updatedItem._id
            console.log(temp)
            const putResponse = await axios.put(`https://crudcrud.com/api/1db9c854df554c80aefa870ee00e0f3d /cart${userEmailId}/${temp}`,updatedItem)
            updateProducts([putResponse.data]);
        }
        catch(err){
            console.log(err)
        }
       }
       /* const idx = newItemArray.findIndex((itm) => {
            console.log(itm)
            if (itm.id === item.id)
            {
              return itm;
            }
            return null;
        })
        console.log(idx)
        if (idx === -1) {
            try{
                const response = await axios.post(url,item)
                updateProducts([...products, response.data]);
                console.log(response)
            }
            catch (err){
                console.log(err)
            }
        }
        else {
            try{
              const mapProduct = newItemArray.findIndex((itm) => {
                if(itm.id === item.id)
                {
                  return itm;
                }
                return null;
              })
              console.log('items')
             console.log(idx)
             let fetchProduct = newItemArray[mapProduct]
             let updatedItem = {...fetchProduct, quantity: Number(fetchProduct.quantity + 1) }
             let temp = updatedItem.id
             console.log(temp)
             const res1 = await axios.put(`https://crudcrud.com/api/a1c8ad6506014cef89655eba6e4ea316/cart${userEmailId}/${temp}`, updatedItem)
             updateProducts([res1.data]);
            }
            catch (err)
            {
              console.log(err)
            }
        }*/
    };


    const removeItemHandler = (id) => {
        let hasItem = false;
        const newItemArray = [...products];
        newItemArray.forEach((element,index) => {
            if((id === element.id) && element.quantity === 1){
                hasItem = true;
                const temp = newItemArray.splice(index,1);
                updateProducts(temp);
            }else if(id === element.id){
                hasItem = true;
                newItemArray[index].quantity = Number(newItemArray[index].quantity) - 1;
            }
        });
        hasItem === false ? updateProducts([...products]) : updateProducts(newItemArray);
    };



  /*const addToCart = (item) => {
    // console.log(item);
    console.log(item)
    const itemIndex = items.findIndex((album) => album.title === item.title);
    if (itemIndex === -1) {
      setItems([...items, item]);
    } else {
        const alreadyAddedItem =items[itemIndex]
        const updateSingleItem= {...alreadyAddedItem, quantity :(alreadyAddedItem.quantity) +(item.quantity)}
        const updateItems=[...items]
        updateItems[itemIndex]=updateSingleItem
        setItems(updateItems)
      }
  };

  const removeFromCart = (id) => {
  
    let updatecart=items.filter((curel)=>
    curel.id!==id);
    setItems(updatecart);

    
  };*/

    
    

  const cartcontextVal = {
    items: products,
    productsQuantity: 0,
    addItem: addItemHandler,
    removeCart: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartcontextVal}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;