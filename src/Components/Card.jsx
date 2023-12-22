import React from 'react'
import hulk from "../Images/hulk.jpg"

export const Card = ({data}) => {
  return (
    <>

    {
        (data)?(
            data.map(item => {
                return (
                    <div className='card'>
                        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt='img-hero'/>
                        <div className='title'>
                            <h3>{item.name}</h3>
                        </div>
                    </div>
                )
            })
        ):""
    }
    </>
  )
}
