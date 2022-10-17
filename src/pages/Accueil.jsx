import Header from "../components/Header"
import Sidebar from "../components/Sidebar";
import AccueilCompo from "../components/Presentation"
import Depenses from "../components/Depenses"
import Statistiques from "../components/Statistiques"
import Session from "../components/Session"
import Score from "../components/Score"
import "../styles/accueil.css"

export default function Accueil() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div>
        <AccueilCompo />
        <Sidebar />
        <Depenses />
        <Statistiques />
      </div>
      <Session />
      <Score />
    </div>
  );
}