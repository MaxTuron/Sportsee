import logo from "../assets/logo.png"

export default function Banner() {

    return (
      <div className="banner">
        <img src={logo} alt="Logo rouge Kasa" className="logo"></img>
        <nav className="nav">
            <p>Accueil</p>
            <p>Profil</p>
            <p>Réglages</p>
            <p>Communauté</p>
        </nav>
      </div>
    );
  }