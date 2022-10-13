import React, {useState, useEffect} from "react";
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



export default function Statistiques() {

  const [post, setPost] = useState(null);

  async function afficheData () {
    try{
      const userResponse = await getStatistiques();
      console.log(userResponse.data.data.sessions)
      setPost(userResponse.data.data.sessions);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
   afficheData()
  }, [])
  return (
    <BarChart
      width={700}
      height={300}
      data={post}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="kilogram" fill="black" />
      <Bar dataKey="calories" fill="red" />
    </BarChart>
  );
}