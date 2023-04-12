import React from 'react';
import img from "./images/weather.jpg"

function Card({ product, addToCart, cartList }) {
  return (

    <div className='col-lg-4 mb-3'>
      <div class="card" style={{ width: "18rem" }}>
        <img src={img} class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">Rs.{product.price}</p>
          <button disabled={cartList.some(item => item.id === product.id)} class="btn btn-primary" onClick={() => addToCart(product

          )}>{`${cartList.some(ele=>ele.id===product.id)?"Go to Cart":"Add to Cart"}`}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;