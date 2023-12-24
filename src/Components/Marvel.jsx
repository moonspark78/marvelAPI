import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const Marvel = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const fetch = async () => {
    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=9bb439618f16495a280f7185fabdb287&hash=d41d8cd98f00b204e9800998ecf8427e`
    );
    setItem(res.data.data.results[0]);
  };
  fetch();

  return (
    <>
     {
        (!item)? "not" : (
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
