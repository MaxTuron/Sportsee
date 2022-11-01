import React from "react";
import PropTypes from 'prop-types';
import "../styles/presentation.css"

/**
 * Component who display the user's name.
 * @Component
 * @param {string} propName 
 * @returns render
 */
export default function Presentation(propName) {
  const {name} = propName;

    return (
      <div className="presentation">
        <p className="text"><b>Bonjour</b> <span className="name">{name}</span> <br />
        Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    );
  }

  Presentation.propTypes = {
    propName: PropTypes.string
  };