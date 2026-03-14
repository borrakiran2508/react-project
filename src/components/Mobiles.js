import React from 'react'
import { mobileData } from '../data/mobiles'

function Mobiles()  {
  return (
    <>
    <h2>Mobiles</h2>
    <div className='proSection'>
        {mobileData.map((item)=>{
            return(
                <div className='imgeBox'>
                    <img className='proImage' src={item.image} alt=""/>
                </div>
                

            )
        })}
    </div>
    </>
  )
}

export default Mobiles
