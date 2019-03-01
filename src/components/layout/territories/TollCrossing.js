import React, { Component } from 'react'
import logo from '../../../images/territories/gsc_toll_crossing.svg';

export class TollCrossing extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="toll_crossing" data-track="gsc" />
      </div>
    )
  }
}

export default TollCrossing