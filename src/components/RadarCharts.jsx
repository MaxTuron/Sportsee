/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import "../styles/radarCharts.css"
import  {getIntensite}  from "../utils/fetchData"
import PropTypes from 'prop-types';

/**
 * Component displaying the radar chart.
 * @param {number} userId 
 * @returns render
 */
export default function RadarCharts(props) {
  const {userId} = props;
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
        <RadarChart outerRadius={120} width={425} height={350} data={data.stats}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis tick={{fill : 'white'}} dataKey="kind"/>
          <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.8}/>
        </RadarChart>
      </ResponsiveContainer>
    </div>

  );
}

RadarCharts.propTypes = {
  userId: PropTypes.number.isRequired
};