import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import  {getDepenses}  from "../utils/fetchData"

export default function Depenses() {
  const { userId } = useParams();

  const [calorie, setCalorie] = useState(null);
  const [protein, setProtein] = useState(null);
  const [glucides, setGlucides] = useState(null);
  const [lipides, setLipides] = useState(null);

  async function afficheData () {
    try{
      const userResponse = await getDepenses(userId);
      setCalorie(userResponse.calories);
      setProtein(userResponse.proteines);
      setGlucides(userResponse.glucides);
      setLipides(userResponse.lipides);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
   afficheData()
  })

    return (
      <div>
        <p>{calorie} Calories</p>
        <p>{protein} Proteines</p>
        <p>{glucides} Glucides</p>
        <p>{lipides} Lipides</p>
      </div>
    );
  }