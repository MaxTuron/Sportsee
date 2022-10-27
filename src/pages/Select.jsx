import Header from "../components/Header"
import { Link } from "react-router-dom"
import "../styles/select.css"

export default function Accueil() {

  return (
    <div>
      <header>
        <Header />
      </header>

      <div className="allPage">
        
        <div className="redirect">
          <Link to={`/12`}>  
            <p className="user">Karl</p>                                                           
          </Link>

          <Link to={`/18`}>  
            <p className="user">Cecilia</p>                                                           
          </Link>
        </div>
      </div>
    </div>
  );
}