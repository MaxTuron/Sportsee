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
      <div className="bandeau">
      <aside className="left-sidebar"><Sidebar /></aside>
        <div className="donnees">
        <Presentation />
          <div className="statistiques">
            <BarChart />
          </div>
          <div className="graphiques">
            <LineCharts />
            <RadarCharts />
            <RadialBarCharts />
          </div>
        </div>
        <aside className="right-sidebar"><Depenses /></aside>
      </div>
    </div>
  );
}