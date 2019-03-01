import React, { Component } from 'react'
import logo from '../../../images/territories/cawdor_refuse_drift.svg';

export class RefuseDrift extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="refuse_drift" data-track="cawdor" />
      </div>
    )
  }
}

export default RefuseDrift