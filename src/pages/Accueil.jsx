import React, {useState} from "react";
import Header from "../components/Header"
import Sidebar from "../components/Sidebar";
import Presentation from "../components/Presentation"
import Depenses from "../components/Depenses"
import BarChart from "../components/BarChart"
import Session from "../components/Session"
import Score from "../components/Score"
import Intensite from "../components/Intensité"
import "../styles/accueil.css"

export default function Accueil() {


  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="bandeau">
        <Sidebar />
        <div className="donnees">
        <Presentation />
          <div className="statistiques">
            <BarChart />
            <Depenses />
          </div>
          <div className="graphiques">
            <Session />
            <Intensite />
            <Score />
          </div>
        </div>
      </div>

    </div>
  );
}