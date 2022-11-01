/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import { LineChart, Line, XAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import "../styles/lineCharts.css"
import  {getSessions}  from "../utils/fetchData"
import PropTypes from 'prop-types';

/**
 * Component displaying the line chart.
 * @Component
 * @param {number} id 
 * @returns render
 */
export default function Session(id) {
  const {userId} = id;
  const [sessions, setSessions] = useState(null);

  async function afficheData () {
    try{
      const userResponse = await getSessions(userId);
      setSessions(userResponse.sessions);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
   afficheData()
  }, [])

  return (
    <div className="lineChart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={425} height={350} data={sessions} >
          <XAxis stroke='white' dataKey="day"/>
          <Tooltip content={<CustomTooltip />} />
          <Legend iconSize={0} layout="vetical" verticalAlign="top" />
          <Line type="monotone" name='Durée moyenne des sessions' dataKey="sessionLength" stroke="white" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>

  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    console.log(active)
    console.log(payload)
    return (
      <div className="custom-tooltip">                  
          <p>{`${payload[0].value}`} min</p>
      </div>
    );
  }
  return null;
};

Session.propTypes = {
  userId: PropTypes.number.isRequired
};

CustomTooltip.propTypes = {
  payload: PropTypes.array
};