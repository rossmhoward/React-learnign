import React, { Component } from 'react'
import logo from '../../../images/territories/unaligned_collapsed_dome.svg';

export class CollapsedDome extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="collapsed_dome" data-track="unaligned" />
      </div>
    )
  }
}

export default CollapsedDome