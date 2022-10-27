import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import  {getDepenses}  from "../utils/fetchData"
import CalorieIcon from "../assets/calories-icon.png"
import ProteineIcon from "../assets/protein-icon.png"
import GlucideIcon from "../assets/fat-icon.png"
import LipideIcon from "../assets/carbs-icon.png"
import "../styles/depenses.css"

export default function Depenses() {
  const { userId } = useParams();

  const [calorie, setCalorie] = useState(null);
  const [proteines, setProtein] = useState(null);
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
      <div className="depenses">
        <div className="categ">
          <img src={CalorieIcon} alt="Icone Calories"></img>
          <div className="stats">
            <p className="bold">{calorie}kCal</p>
            <p>Calories</p>
          </div>
        </div>
        <div className="categ">
          <img src={ProteineIcon} alt="Icone Proteines"></img>
          <div className="stats">
            <p className="bold">{proteines}g</p>
            <p>Proteines</p>
          </div>       
        </div>
        <div className="categ">
          <img src={LipideIcon} alt="Icone Lipides"></img>
          <div className="stats">
            <p className="bold">{lipides}g</p>
            <p>Lipides</p>
          </div>
        </div>
        <div className="lastCateg">
          <img src={GlucideIcon} alt="Icone Glucides"></img>
          <div className="stats">
            <p className="bold">{glucides}g</p>
            <p>Glucides</p>
          </div>
        </div>
      </div>
    );
  }