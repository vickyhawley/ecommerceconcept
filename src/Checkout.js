import React from 'react';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkoutColumn'>
      <div className="checkout__let">
        <img src="https://static.semrush.com/blog/uploads/media/94/1d/941df8494d9b1c03f4a0a3c887fc80be/original.png" alt="" className="checkout__ad" />
      </div>
      <div className="">
        <h2 className="checkout__title">Your Shopping Basket</h2>
        <CheckoutProduct />
      </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout