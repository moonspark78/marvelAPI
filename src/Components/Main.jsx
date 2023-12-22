import React, { useEffect, useState } from 'react'
import logo from "../Images/logoa.jpg"
import {Card} from "../Components/Card"
import axios from 'axios';

export const Main = () => {
  const [url, setUrl] = useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=f66445c5348289a347bb12ba06e99853&hash=7aaa8bc006a3cb9db66e8f9fcf477902")
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
