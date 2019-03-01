import React, { Component } from 'react'
import logo from '../../../images/territories/delaque_gambling_den.svg';

export class GamblingDen extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="gambling_den" data-track="delaque" />
      </div>
    )
  }
}

export default GamblingDen