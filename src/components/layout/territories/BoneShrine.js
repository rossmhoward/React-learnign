import React, { Component } from 'react'
import logo from '../../../images/territories/cawdor_bone_shrine.svg';

export class BoneShrine extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="bone_shrine" data-track="cawdor" />
      </div>
    )
  }
}

export default BoneShrine