import Header from "../components/Header"
import Sidebar from "../components/Sidebar";
import AccueilCompo from "../components/Accueil"
import Depenses from "../components/Depenses"
import Statistiques from "../components/Statistiques"
import Session from "../components/Session"
import "../styles/accueil.css"

export default function Accueil() {
  return (
    <div>
      <Header />
      <Sidebar />
      <AccueilCompo />
      <Depenses />
      <Statistiques />
      <Session />
    </div>
  );
}