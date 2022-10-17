import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import  {getName}  from "../utils/fetchData"

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

    return (
      <div className="header">
        <p>Bonjour, {name}</p>
      </div>
    );
  }