import React, { Component } from 'react'
import logo from '../../../images/territories/vansaar_archaeotech.svg';

export class Archaeotech extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="archaeotech" data-track="vansaar" />
      </div>
    )
  }
}

export default Archaeotech