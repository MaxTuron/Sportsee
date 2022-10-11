import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';



export default function Session() {

      const [post, setPost] = useState(null);

      useEffect(() => {
        axios.get('http://localhost:3000/user/12/average-sessions').then((response) => {
          setPost(response.data.data.sessions);
          console.log(response.data.data.sessions)
        });
      }, []);


  return (
	<LineChart width={900} height={600} data={post} >
		<CartesianGrid strokeDasharray="3 3" />
		<XAxis dataKey="day" interval="preserveEnd" />
		<YAxis interval="preserveEnd" />
        <Tooltip />
		<Legend />
		<Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
	</LineChart>
  );
}