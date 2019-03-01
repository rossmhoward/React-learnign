import React, { Component } from 'react'
import logo from '../../../images/territories/goliath_smelting_works.svg';

export class SmeltingWorks extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="smelting_works" data-track="goliath" />
      </div>
    )
  }
}

export default SmeltingWorks