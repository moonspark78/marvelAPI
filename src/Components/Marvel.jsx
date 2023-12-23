import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const Marvel = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const fetch = async () => {
    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=f66445c5348289a347bb12ba06e99853&hash=7aaa8bc006a3cb9db66e8f9fcf477902`
    );
    setItem(res.data.data.results[0]);
  };
  fetch();

  return (
    <>
     {
        (!item)? "" : (
            <div className="box-centent">
                <div className="right-box">
                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="img-marvel"/>
                </div>
                <div className="left-box">
                    <h1>{item.name}</h1>
                    <h4>{item.description}</h4>
                </div>
            </div>
        )
     }
    </>
  );
};
