import React, { Component } from 'react'
import logo from '../../../images/territories/escher_narco_den.svg';

export class NarcoDen extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="narco_den" data-track="escher" />
      </div>
    )
  }
}

export default NarcoDen