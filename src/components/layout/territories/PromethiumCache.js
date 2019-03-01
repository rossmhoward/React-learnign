import React, { Component } from 'react'
import logo from '../../../images/territories/unaligned_old_ruins.svg';

export class OldRuins extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="old_ruins" data-track="unaligned" />
      </div>
    )
  }
}

export default OldRuins