import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { LineChart, Line, XAxis, Legend, Tooltip } from 'recharts';
import "../styles/lineChart.css"
import  {getSessions}  from "../utils/fetchData"


export default function Session() {

  const { userId } = useParams();
  
  const [sessions, setSessions] = useState(null);

  async function afficheData () {
    try{
      const userResponse = await getSessions(userId);
      console.log(userResponse)
      setSessions(userResponse.sessions);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
   afficheData()
  }, [])

      const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">                  
                <p>{`${payload[0].value}`} min</p>
            </div>
          );
        }
        return null;
      };

  return (
	<LineChart className="lineChart" width={900} height={600} data={sessions}>
		<XAxis stroke='white' dataKey="day"/>
        <Tooltip content={<CustomTooltip />} />
		<Legend />
		<Line type="monotone" dataKey="sessionLength" stroke="white" activeDot={{ r: 8 }} />
	</LineChart>
  );
}