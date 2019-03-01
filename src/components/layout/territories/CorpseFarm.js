import React, { Component } from 'react'
import logo from '../../../images/territories/cawdor_corpse_farm.svg';

export class CorpseFarm extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="corpse_farm" data-track="cawdor" />
      </div>
    )
  }
}

export default CorpseFarm