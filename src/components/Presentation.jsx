import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import  {getName}  from "../utils/fetchData"
import "../styles/presentation.css"

export default function AccueilCompo() {

  const { userId } = useParams();

  const [name, setName] = useState(null);
  

  async function afficheData () {
    try{
      const userResponse = await getName(userId);
      setName(userResponse.name);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
   afficheData()
  })

  console.log(name)
    return (
      <div className="presentation">
        <p className="text">Bonjour, <span className="name">{name}</span> <br />
        Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    );
  }