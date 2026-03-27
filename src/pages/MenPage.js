import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import menData from '../data/mens'


function MenPage() {

         
   const[selectedProduct, setSelectedProduct] = useState([]);

   const companyHandler=(mango)=>{
    if(selectedProduct.includes(mango)){
        setSelectedProduct(selectedProduct.filter(item =>item !== mango))
    }else{
      setSelectedProduct([...selectedProduct, mango])
    }
   }

   const filteredProduct = selectedProduct.length===0?
        menData:menData.filter((orange)=>selectedProduct.includes(orange.model))

        

         const id = useParams();
          const {addToCart } = useCart();

          const product = menData.find((item)=> item.id === id)



  return (
    <>
    <Navbar/>
    <div className='fullpage'>
      <div className='pro-selected'>
      {menData.map((dress)=>{
        return(
          <div className='pro-input' key={dress.id}>
            <label>
              <input type='checkbox'
              checked={selectedProduct.includes(dress.model)}  
              onChange={()=>companyHandler(dress.model)}
              />
              <h3>{dress.model}</h3>
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
                    <h2>{item.model}</h2>
                    </div>
                  <div className='ind-model'>
                    <h2>{item.type}</h2>
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

export default MenPage;
