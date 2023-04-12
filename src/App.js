
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Card from './Card';
import Cart from './Cart';
import { useState } from 'react';

function App() {
  const products = [
    {
      id: 1,
      title: "iphone",
      Image: "",
      price: 6000,
    },
    {
      id: 2,
      title: "samsung",
      Image: "",
      price: 5000,
    },
    {
      id: 3,
      title: "oneplus",
      Image: "",
      price: 4000,
    },
    {
      id: 4,
      title: "vivo",
      Image: "",
      price: 3000,
    },
    {
      id: 5,
      title: "oppo",
      Image: "",
      price: 2000,
    },
    {
      id: 6,
      title: "realme",
      Image: "",
      price: 1000,
    },
    {
      id: 7,
      title: "mi",
      Image: "",
      price: 1000,
    },
    {
      id: 8,
      title: "google pixel",
      Image: "",
      price: 1000,
    },
  ]

  const [cartList, setCart] = useState([])
  const [total, setTotal] = useState(0)

  let addToCart = (product) => {
    setCart([...cartList, {...product,quantity:1}])
    setTotal(total + product.price)
  }

  let removeCart = (productItem) => {
    let itemIndex = cartList.findIndex(item => productItem.id === item.id)
      cartList.splice(itemIndex, 1)
    setCart([...cartList])
    setTotal(total - productItem.price * productItem.quantity)
    
  };

const incQuantity = (cartItem)=>{
  let itemIndex = cartList.findIndex((item)=> cartItem.id===item.id);
  cartList[itemIndex].quantity = cartList[itemIndex].quantity + 1
  setCart([...cartList])
  setTotal(total + cartItem.price )
}
const decQuantity = (cartItem)=>{
  let itemIndex = cartList.findIndex((item)=>cartItem.id===item.id);
  
    cartList[itemIndex].quantity=cartList[itemIndex].quantity -1
  
  
  setCart([...cartList])
  setTotal(total - cartItem.price)
  
}
  return (
    <div className='container'>
      <div className="row">
        <div className='col-lg-9'>
          <div className="row">
            {
              products.map((product) => {
                return <Card cartList={cartList} product={product} addToCart={addToCart} />;
              })
            }
          </div>
        </div>
        <div className="col-lg-3">
          <Cart cartList={cartList} removeCart={removeCart} incQuantity={incQuantity} decQuantity={decQuantity}/>
          <h3>Total : {total}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
