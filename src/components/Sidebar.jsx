import Haltere from "../assets/sidebarIconHaltere.png"
import Natation from "../assets/sidebarIconNatation.png"
import Zen from "../assets/sidebarIconZen.png"
import Velo from "../assets/sidebarIconVelo.png"
import "../styles/sidebar.css"

export default function Sidebar() {

    return (
      <div className="sidebar">
        <div className="icons">
          <img src={Haltere} alt="Icone Haltere" className="logoSidebar"></img>
          <img src={Natation} alt="Icone Natation" className="logoSidebar"></img>
          <img src={Zen} alt="Icone Zen" className="logoSidebar"></img>
          <img src={Velo} alt="Icone Velo" className="logoSidebar lastIcon"></img>
        </div>
        <p className="copyright">Copyright, Sportsee 2020</p>
      </div>
    );
  }