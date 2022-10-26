import logo from "../assets/sportseeLogo.png"
import "../styles/header.css"

export default function Header() {

    return (
      <div className="header">
        <nav className="nav">
        <img src={logo} alt="Logo rouge Kasa" className="logo"></img>
            <p className="headerTitle">Accueil</p>
            <p className="headerTitle">Profil</p>
            <p className="headerTitle">Réglages</p>
            <p className="headerTitle">Communauté</p>
        </nav>
      </div>
    );
  }