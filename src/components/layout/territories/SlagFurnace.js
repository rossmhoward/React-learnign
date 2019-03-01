import React, { Component } from 'react'
import logo from '../../../images/territories/goliath_slag_furnace.svg';

export class SlagFurnace extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="slag_furnace" data-track="goliath" />
      </div>
    )
  }
}

export default SlagFurnace