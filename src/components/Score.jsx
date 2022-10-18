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
 
  return (
<RadialBarChart
  width={500}
  height={300}
  cx={150}
  cy={150}
  innerRadius={90}
  barSize={20}
  data={score}
  startAngle={90}
  endAngle={450}
  >
  <PolarAngleAxis
  type="number"
  domain={[0, 100]}
  tick={false}
  />
  <RadialBar
  label={{ position:"middle", fill: "#fff" }}
  background
  clockWise
  dataKey="value"
  cornerRadius={15}
  fill="red"
  />

</RadialBarChart>
  );
}