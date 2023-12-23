import axios from 'axios';
import React from 'react'
import {useParams} from "react-router-dom"

export const Marvel = () => {
    const {id} = useParams()
    const fetch = async()=> {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=f66445c5348289a347bb12ba06e99853&hash=7aaa8bc006a3cb9db66e8f9fcf477902`)
    }
  return (
    <>
        <p>Le Lorem Ipsum est simplement du faux texte employé dans la compositiones {id} </p>
    </>
  )
}
