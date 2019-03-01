import React, { Component } from 'react'
import logo from '../../../images/territories/vansaar_generatorium.svg';

export class Generatorium extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="generatorium" data-track="vansaar" />
      </div>
    )
  }
}

export default Generatorium