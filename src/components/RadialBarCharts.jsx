import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { RadialBarChart, RadialBar, PolarAngleAxis,ResponsiveContainer } from "recharts";
import "../styles/radialBarChart.css"
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
 
  return (
    <div className='radialBarChart'>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={425}
          height={350}
          innerRadius={90}
          barSize={20}
          data={score}
          startAngle={90}
          endAngle={450}
        >
        <text x={100} y={20} fill="black" textAnchor="end" >
          <tspan fontSize="20">Score</tspan>
        </text>

        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          tick={false}
        />

        <RadialBar
          label={{ position: "inside", fill: "#fff" }}
          background
          clockWise
          dataKey="value"
          cornerRadius={15}
          fill="red"
        />

        </RadialBarChart>
      </ResponsiveContainer>
    </div>

  );
}