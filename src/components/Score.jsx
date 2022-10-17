import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from "recharts";
import "../styles/lineChart.css"
import  {getUserScore}  from "../utils/fetchData"


export default function Session() {

  const { userId } = useParams();
  
  const [userScore, setUserscore] = useState(null);

  async function afficheData () {
    try{
      const userResponse = await getUserScore(userId);
      console.log(userResponse)
      setUserscore(userResponse);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
   afficheData()
  }, [])


  return (
    <RadialBarChart
    width={500}
    height={300}
    cx={150}
    cy={150}
    innerRadius={20}
    outerRadius={140}
    barSize={10}
    data={userScore}
  >
    <PolarAngleAxis 
        type="number" 
        domain={[0, 100]} 
    />
    <RadialBar
      label={{ position: "insideStart", fill: "#fff" }}
      background
      dataKey="userScore"
    />
  </RadialBarChart>
  );
}