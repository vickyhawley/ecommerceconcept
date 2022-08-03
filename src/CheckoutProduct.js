import React from 'react';
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className='checkoutProduct'>
        <img src='' alt="headphones" className='checkoutProduct__image'/>
        <div className="product__info">
            <p className='checkoutProduct_title'></p> 
            <p className='checkoutProduct__price'>£
            <strong>{}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array()
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
            <button>Remove to basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct