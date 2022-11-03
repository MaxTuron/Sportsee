/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import Header from "../components/Header"
import Sidebar from "../components/Sidebar";
import Presentation from "../components/Presentation"
import Depenses from "../components/Depenses"
import BarChart from "../components/BarChart"
import LineCharts from "../components/LineCharts"
import RadialBarCharts from "../components/RadialBarCharts"
import RadarCharts from "../components/RadarCharts"
import Error from "../pages/Error"
import {getName}  from "../utils/fetchData"
import {useParams} from 'react-router-dom';
import "../styles/accueil.css"

export default function Accueil() {
  const { userId } = useParams();
  
  const [name, setName] = useState(null);
  const [id, setId] = useState(null);

  async function afficheData () {
    try{
      const userResponse = await getName(userId);
      setName(userResponse.name);
      setId(parseInt(userId))
    } catch(err) {
      setName(null);
      console.log(err)
    }
  }

  useEffect(() => {
   afficheData()
  },[])

  if(name == null){
    return(
      <div>
        <div className="msgError">
          <Error />
        </div>
      </div>
    )
  }else {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div className="allPage">
          <aside className="leftBar"><Sidebar/></aside>
          <div className="mainContent">
              <div className="intro">
                <Presentation name={name}/>
              </div>
              <div className="barCharts">
                <BarChart userId={id}/>
              </div>
              <div className="otherCharts">
                <LineCharts userId={id}/>
                <RadarCharts userId={id}/>
                <RadialBarCharts userId={id}/>
              </div>
          </div>
          <aside className="rightBar"><Depenses /></aside>
        </div>
      </div> 
    );
  }
}