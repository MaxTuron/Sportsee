import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import  {getStatistiques}  from "../utils/fetchData"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import "../styles/barChart.css"

export default function Statistiques() {

  const { userId } = useParams();

  const [post, setPost] = useState(null);
  
  async function afficheData () {
    try{
      const userResponse = await getStatistiques(userId);
      const sessionsDays = userResponse.sessions
      console.log(sessionsDays)
      setPost(userResponse.sessions);

      let sessionNumber = 0

      sessionsDays.forEach(session => {
        sessionNumber = sessionNumber + 1
        session.day = sessionNumber
      });
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
   afficheData()
  }, [])

  return (
    <div className="barChart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart        
          data={post}
        >
          <text x={250} y={20} fill="black" textAnchor="end" >
                <tspan fontSize="20">Activité quotidienne</tspan>
            </text>
            
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day"/>
          <YAxis axisLine={false} orientation="right" tickCount={4} />
          <Tooltip />
          <Legend iconType="circle" layout="horizontal" verticalAlign="top" align="end"/>
          <Bar dataKey="kilogram" name="Poids (kg)" fill="black" barSize={10} radius={25}/>
          <Bar dataKey="calories" name="Calories brûlées (kCal)" barSize={10} radius={25} fill="red" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}