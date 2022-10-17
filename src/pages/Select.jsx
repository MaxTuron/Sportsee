import Header from "../components/Header"
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom"
import "../styles/accueil.css"

export default function Accueil() {

  return (
    <div>
        <Header />
        <Sidebar />
        <Link to={`/12`}>  
        <p>Ici 12</p>                                                           
        </Link>
        <Link to={`/18`}>  
        <p>Ici 18</p>                                                           
        </Link>
    </div>
  );
}