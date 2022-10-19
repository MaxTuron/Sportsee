import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import "../styles/lineChart.css"
import  {getIntensite}  from "../utils/fetchData"


export default function Session() {
  const { userId } = useParams();
  
  const [data, setData] = useState([]);
  const [kind, setKind] = useState(null);

  async function afficheData () {
    try{
      const userResponse = await getIntensite(userId);
      console.log(userResponse)
      setData({stats : userResponse.data})
      setKind(userResponse.kind)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
   afficheData()
  }, [])

console.log(data.stats)
console.log(kind)
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data.stats}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      
      <Radar
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}