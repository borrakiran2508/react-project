import React from 'react'
import menData from '../data/mens'


function Mens() {
  return (
    <>
    <h2>Mens Wear</h2>
    <div className='proSection'>
      {menData.map((item)=>{
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

export default Mens
