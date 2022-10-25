import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import "../styles/radarCharts.css"
import  {getIntensite}  from "../utils/fetchData"

export default function RadarCharts() {
  const { userId } = useParams();
  
  const [data, setData] = useState([]);

  async function afficheData () {
    try{
        const userResponse = await getIntensite(userId);

        setData({stats : userResponse.data})

        const arraySessions = userResponse.data
        const objKind = userResponse.kind

        //Transformation des kind numériques en chaine de caractéres
        arraySessions.forEach(session => {
          if(objKind[session.kind]==="cardio"){
            objKind[session.kind] = "Cardio"
          } else if(objKind[session.kind]==="speed"){
            objKind[session.kind] = "Vitesse"
          } else if(objKind[session.kind]==="energy"){
            objKind[session.kind] = "Energie"
          } else if(objKind[session.kind]==="endurance"){
            objKind[session.kind] = "Endurance"
          } else if(objKind[session.kind]==="strength"){
            objKind[session.kind] = "Force"
          } else if(objKind[session.kind]==="intensity"){
            objKind[session.kind] = "Intensité"
          }
          session.kind = objKind[session.kind]
        });

    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
   afficheData()
  }, [])

  return (
    <div className='radarChart'>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart 
          outerRadius={150}
          width={425}
          height={350}
          data={data.stats}
        >

          <PolarGrid />
          <PolarAngleAxis tick={{fill : 'white'}} dataKey="kind"/>

          <Radar
            dataKey="value"
            stroke="red"
            fill="red"
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>

  );
}