import React, {useState, useEffect} from "react";
import axios from "axios";
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

    useEffect(() => {
      axios.get('http://localhost:3000/user/18/activity ').then((response) => {
        setPost(response.data.data.sessions);
        
      });
    }, []);

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