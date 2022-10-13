import React, {useEffect, useState} from "react";
import  {getUser}  from "../utils/fetchData"

export default function Depenses() {

  const [calorie, setCalorie] = useState(null);
  const [protein, setProtein] = useState(null);
  const [glucides, setGlucides] = useState(null);
  const [lipides, setLipides] = useState(null);

  async function afficheData () {
    try{
      const userResponse = await getUser();
      setCalorie(userResponse.data.data.keyData.calorieCount);
      setProtein(userResponse.data.data.keyData.proteinCount);
      setGlucides(userResponse.data.data.keyData.carbohydrateCount);
      setLipides(userResponse.data.data.keyData.lipidCount);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
   afficheData()
  }, [])

    return (
      <div>
        <p>{calorie} Calories</p>
        <p>{protein} Proteines</p>
        <p>{glucides} Glucides</p>
        <p>{lipides} Lipides</p>
      </div>
    );
  }