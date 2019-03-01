import React, { Component } from 'react'
import logo from '../../../images/territories/escher_stinger_mould_sprawl.svg';

export class StingerMouldSprawl extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="stinger_mould_sprawl" data-track="escher" />
      </div>
    )
  }
}

export default StingerMouldSprawl