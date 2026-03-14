import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  
  const {cartItems} = useCart()

  return (
    <>
    <div className='navsection'>
        <div className='title'>
          <h3>E Mart</h3>
        </div>
        <div className='nav-list'>
          <ul>
            <Link to='/'>
            <li>Home</li>
            </Link>
           <Link to='/mobiles'>
            <li>mobiles</li>
           </Link>
           <Link to='/computers'>
            <li>Computers</li>
           </Link>
            <Link to='/mens'>
            <li>Mens</li>
            </Link>
            <Link to='/kids'>
            <li>Kids</li>
            </Link>
          </ul>
        </div>
        <div className='search'>
            <input type='text'
            placeholder='Search...'/>
        </div>
        <div>
         <Link to='/cart'>
          <div className='cart'>
            Cart<span>{cartItems.length}</span>
          </div>
         </Link>
        </div>
        <div className='user'>
          <div className='user-details'>
            SignIn/SignUp
          </div>
          
        </div>
    </div>
    

    </>
    
  )
}

export default Navbar;
