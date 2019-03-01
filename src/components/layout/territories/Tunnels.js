import React, { Component } from 'react'
import logo from '../../../images/territories/gsc_tunnels.svg';

export class Tunnels extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="tunnels" data-track="gsc" />
      </div>
    )
  }
}

export default Tunnels