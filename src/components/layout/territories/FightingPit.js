import React, { Component } from 'react'
import logo from '../../../images/territories/goliath_fighting_pit.svg';

export class FightingPit extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="fighting_pit" data-track="goliath" />
      </div>
    )
  }
}

export default FightingPit