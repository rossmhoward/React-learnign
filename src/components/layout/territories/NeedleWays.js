import React, { Component } from 'react'
import logo from '../../../images/territories/delaque_needle_ways.svg';

export class NeedleWays extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="needle_ways" data-track="delaque" />
      </div>
    )
  }
}

export default NeedleWays