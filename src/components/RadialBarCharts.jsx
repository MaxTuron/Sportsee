/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import { RadialBarChart, RadialBar, Legend, PolarAngleAxis,ResponsiveContainer } from "recharts";
import "../styles/radialBarChart.css"
import  {getUserScore}  from "../utils/fetchData"
import PropTypes from 'prop-types';

/**
 * Component displaying the radial bar chart.
 * @Component
 * @param {number} id 
 * @returns render
 */
export default function Session(id) {
  const {userId} = id;
  const [score, setScore] = useState([]);
  async function afficheData () {
    try{
      const userResponse = await getUserScore(userId);
      setScore([{value : userResponse.userScore}])
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
   afficheData()
  }, [])

  return (
    <div className='radialBarChart'>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart innerRadius={100} barSize={15} data={score} startAngle={90} endAngle={450}>
        <text x={70} y={25} fill="black" textAnchor="end" >
          <tspan fontSize="20">Score</tspan>
        </text>
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar dataKey="value" cornerRadius={15} fill="red" />
        <Legend iconSize={0} payload={score} layout="vertical" verticalAlign='middle' align='center' content={renderLegend} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>

  );
}

/**
 * Function who get the user score and display it with the full message.
 * @param {object} props 
 */
const renderLegend = (props) => {
  const { payload } = props;
  return (
    <div>
      {
        payload.map((score,index) => (
          <p key={index}> <b>{score.value}%</b> <span><br></br>de votre <br></br>objectif</span> </p>
        ))
      }
    </div>
  );
}

Session.propTypes = {
  userId: PropTypes.number.isRequired
};

renderLegend.propTypes = {
  props: PropTypes.object
};