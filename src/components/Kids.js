import React from 'react'
import kidData from '../data/kids'


function Kids() {
  return (
    <>
    <h2>Kids Wear</h2>
    <div className='proSection'>
        {kidData.map((item)=>{
            return(
                <div className='imgBox'>
                    <img className='proImage' src={item.image} alt=''/>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Kids
