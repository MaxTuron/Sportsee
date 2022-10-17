import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import "../styles/lineChart.css"
import  {getUserScore}  from "../utils/fetchData"


export default function Session() {

  const { userId } = useParams();
  
  const [score, setScore] = useState([]);

  async function afficheData () {
    try{
      const userResponse = await getUserScore(userId);
      setScore([{value : userResponse.userScore}])
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
   afficheData()
  }, [])


console.log(score)
  return (
    <RadialBarChart
    width={500}
    height={300}
    cx={150}
    cy={150}
    innerRadius={20}
    outerRadius={140}
    barSize={50}
    data={score}
  >
    <PolarAngleAxis 
      type="number" 
      domain={[0, 100]} 
 />

    <RadialBar
      label={{ position: "insideStart", fill: "#fff" }}
      background
      dataKey="value"
    />
  </RadialBarChart>
  );
}