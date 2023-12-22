import React from 'react'
import hulk from "../Images/hulk.jpg"

export const Card = () => {
  return (
    <div className='card'>
        <img src={hulk} alt='img-hero'/>
        <div className='title'>
            <h3>Hulk</h3>
        </div>
    </div>
  )
}
