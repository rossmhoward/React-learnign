import React, { Component } from 'react'
import logo from '../../../images/territories/unaligned_wastes.svg';

export class Wastes extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="wastes" data-track="unaligned" />
      </div>
    )
  }
}

export default Wastes