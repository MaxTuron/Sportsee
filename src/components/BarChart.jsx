/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
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

/**
 * Component displaying the bar chart.
 * @Component
 * @param {number} id 
 * @returns render
 */
export default function Statistiques(id) {
  const {userId} = id;
  const [data, setData] = useState(null);
  
  async function afficheData () {
    try{
      const userResponse = await getStatistiques(userId);
      const sessionsDays = userResponse.sessions
      setData(userResponse.sessions);

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
      <BarChart data={data}>
          <text x={250} y={20} fill="black" textAnchor="end" >
            <tspan fontSize="20">Activité quotidienne</tspan>
          </text>
          <CartesianGrid vertical={false} strokeDasharray='3 3'/>
          <XAxis dataKey='day'/>
          <YAxis dataKey='kilogram' tickLine={false} orientation='right' tickCount={4} axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
          <YAxis yAxisId='calorie' dataKey='calories' hide />
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" layout="horizontal" verticalAlign="top" align="end"/>
          <Bar dataKey="kilogram" name="Poids (kg)" fill="black" barSize={10} radius={25}/>
          <Bar yAxisId='calorie' dataKey="calories" name="Calories brûlées (kCal)" barSize={10} radius={25} fill="red" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltipBarChart">                  
          <p>{`${payload[0].value}`} Kg</p>
          <p>{`${payload[1].value}`} kCal</p>
      </div>
    );
  }
  return null;
};

Statistiques.propTypes = {
  userId: PropTypes.number.isRequired
};

CustomTooltip.propTypes = {
  payload: PropTypes.array
};