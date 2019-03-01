import React, { Component } from 'react'
import logo from '../../../images/territories/unaligned_workshop.svg';

export class Workshop extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="workshop" data-track="unaligned" />
      </div>
    )
  }
}

export default Workshop