import Header from "../components/Header"
import Sidebar from "../components/Sidebar";
import AccueilCompo from "../components/Accueil"
import Sessions from "../components/Sessions"
import "../styles/accueil.css"

export default function Accueil() {
  return (
    <div>
      <Header />
      <Sidebar />
      <AccueilCompo />
      <Sessions />
    </div>
  );
}