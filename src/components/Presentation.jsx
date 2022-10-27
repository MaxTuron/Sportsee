import React from "react";
import "../styles/presentation.css"

export default function Presentation(props) {
  const {name} = props;

    return (
      <div className="presentation">
        <p className="text"><b>Bonjour</b> <span className="name">{name}</span> <br />
        Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    );

  }