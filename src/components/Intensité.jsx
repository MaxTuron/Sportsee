import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import "../styles/lineChart.css"
import  {getIntensite}  from "../utils/fetchData"


export default function Session() {
  const { userId } = useParams();
  
  const [data, setData] = useState([]);

  async function afficheData () {
    try{
        const userResponse = await getIntensite(userId);
        setData({stats : userResponse.data})
        const array = userResponse.data
        const objKind = userResponse.kind
        array.forEach(session => {
            if(session.kind === 1){
                session.kind = objKind[1]
            } else if (session.kind === 2){
                session.kind = objKind[2]
            } else if (session.kind === 3){
                session.kind = objKind[3]
            } else if (session.kind === 4){
                session.kind = objKind[4]
            } else if (session.kind === 5){
                session.kind = objKind[5]
            } else if (session.kind === 6){
                session.kind = objKind[6]
            }
        });


    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
   afficheData()
  }, [])

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