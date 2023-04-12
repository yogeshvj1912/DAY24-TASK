import React from 'react';

function Cart({ cartList, removeCart,incQuantity,decQuantity }) {
  return (

    <ol class="list-group list-group-numbered"><h2>Cart</h2>
      {
        cartList.map((item) => {
          return <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{item.title}</div>
              {item.price} - {item.quantity}
              <button onClick={()=>incQuantity(item)}>+</button>
              <button onClick={()=>decQuantity(item)}>-</button>
            </div>
            <button class="badge bg-primary rounded-pill" onClick={() => removeCart(item)}>Remove</button>
          </li>
        })
      }

    </ol>

  );
}

export default Cart;