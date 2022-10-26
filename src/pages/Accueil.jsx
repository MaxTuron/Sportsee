import React from "react";
import Header from "../components/Header"
import Sidebar from "../components/Sidebar";
import Presentation from "../components/Presentation"
import Depenses from "../components/Depenses"
import BarChart from "../components/BarChart"
import LineCharts from "../components/LineCharts"
import RadialBarCharts from "../components/RadialBarCharts"
import RadarCharts from "../components/RadarCharts"
import "../styles/accueil.css"

export default function Accueil() {


  return (
    <div>
      <header>
        <Header />
      </header>
      
      <div className="allPage">

        <aside className="leftBar"><Sidebar/></aside>

        <div className="mainContent">
            <div className="intro">
              <Presentation />
            </div>
            <div className="barCharts">
              <BarChart />
            </div>
            <div className="otherCharts">
              <LineCharts />
              <RadarCharts />
              <RadialBarCharts />
            </div>
        </div>

        <aside className="rightBar"><Depenses /></aside>
      </div>

    </div> 
  );
}