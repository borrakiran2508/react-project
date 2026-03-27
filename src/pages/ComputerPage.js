import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import computerData from '../data/computers'

function ComputerPage() {

         
   const[selectedProduct, setSelectedProduct] = useState([]);

   const companyHandler=(mango)=>{
    if(selectedProduct.includes(mango)){
        setSelectedProduct(selectedProduct.filter(item =>item !== mango))
    }else{
      setSelectedProduct([...selectedProduct, mango])
    }
   }

   const filteredProduct = selectedProduct.length===0?
        computerData:computerData.filter((orange)=>selectedProduct.includes(orange.company))

        

         const id = useParams();
          const {addToCart}= useCart();

          const product = computerData.find((item)=> item.id === id)



  return (
    <>
    <Navbar/>
    <div className='fullpage'>
      <div className='pro-selected'>
      {computerData.map((computer)=>{
        return(
          <div className='pro-input' key={computer.id}>
            <label>
              <input type='checkbox'
              checked={selectedProduct.includes(computer.company)}  
              onChange={()=>companyHandler(computer.company)}
              />
              <h3>{computer.company}</h3>
            </label>
          </div>
        )
      })}
    </div>
    <div className='pageSection'>
      {filteredProduct.map((item)=>{
        return(
            <div key={item.id}>
              
                <div className='pageImg'>
                    <img src={item.image} alt={item.name}/>
                </div>
              
                <div className='ind-image'>
                  <div className='ind-company'>
                    <h2>{item.company}</h2>
                    </div>
                  <div className='ind-model'>
                    <h2>{item.os}</h2>
                    </div>
                  <div className='ind-price'>
                    <p>₹{item.price}</p>
                    </div>
                  <div className='ind-desc'>
                    <p>{item.description}</p>
                    </div>   
                </div>
                <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
        )
      })}
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default ComputerPage;
