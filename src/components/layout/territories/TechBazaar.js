import React, { Component } from 'react'
import logo from '../../../images/territories/vansaar_tech_bazaar.svg';

export class TechBazaar extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="tech_bazaar" data-track="vansaar" />
      </div>
    )
  }
}

export default TechBazaar