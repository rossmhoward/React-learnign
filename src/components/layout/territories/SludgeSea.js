import React, { Component } from 'react'
import logo from '../../../images/territories/unaligned_sludge_sea.svg';

export class SludgeSea extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="sludge_sea" data-track="unaligned" />
      </div>
    )
  }
}

export default SludgeSea