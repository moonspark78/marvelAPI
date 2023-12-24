import React, { useEffect, useState } from 'react'
import logo from "../Images/logoa.jpg"
import {Card} from "../Components/Card"
import axios from 'axios';


export const Main = () => {


  const [url, setUrl] = useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9bb439618f16495a280f7185fabdb287&hash=d41d8cd98f00b204e9800998ecf8427e")
  const [item, setItem] = useState()
  useEffect(() =>{
    const fetch = async () =>{
      const res = await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])





  return (
    <>
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
      <div className='content'>
          {
            (!item)?<p>Not found</p> : <Card data={item}/>
          }
      </div>
    </>
  )
}
