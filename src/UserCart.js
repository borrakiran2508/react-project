import React from 'react'
import { useCart } from './context/CartContext'


function UserCart() {
    const {cartItems} = useCart();
  return (
    <div>
      {cartItems.map((item, index)=>{
        return(
            <div className='cart-section' key={index}>
                <div className='cart-img'>
                    <img src={item.image} alt=''/>
                </div>
                <div cart-details>
                    <h3>{item.product}</h3>
                    <h2>{item.price}</h2>
                    <h3>{item.model}</h3>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default UserCart;
