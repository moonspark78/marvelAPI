import React from 'react'
import logo from "../Images/logoa.jpg"

export const Main = () => {
  return (
    <div className='header'>
        <div className='search-bar'>
            <img src={logo} alt='logo'/>
            <input 
                placeholder='Choose your Marvel ...' 
                type='search'
                className='search'
            />
        </div>
    </div>
  )
}
