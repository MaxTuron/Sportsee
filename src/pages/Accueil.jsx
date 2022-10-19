import Header from "../components/Header"
import Sidebar from "../components/Sidebar";
import AccueilCompo from "../components/Presentation"
import Depenses from "../components/Depenses"
import Statistiques from "../components/Statistiques"
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
        <AccueilCompo />
          <div className="statistiques">
            <Statistiques />
            <Depenses />
          </div>
          <div className="graphiques">
            <Session />
            <Score />
            <Intensite />
          </div>
        </div>
      </div>

    </div>
  );
}