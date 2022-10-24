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
  Legend
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
    <BarChart className="barChart"
      width={1250}
      height={450}
      data={post}
      margin={{
        top: 5,
        right: 30,
        left: 20
      }}
    >
      <CartesianGrid vertical={false} strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis axisLine={false} orientation="right"/>
      <Tooltip />
      <Legend />
      <Bar dataKey="kilogram" name="Poids (kg)" fill="black" barSize={10} radius={25}/>
      <Bar dataKey="calories" name="Calories brûlées (kCal)" barSize={10} radius={25}fill="red" />
    </BarChart>
  );
}