import React, { Component } from 'react'
import logo from '../../../images/territories/delaque_drinking_hole.svg';

export class DrinkingHole extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="drinking_hole" data-track="delaque" />
      </div>
    )
  }
}

export default DrinkingHole