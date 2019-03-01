import React, { Component } from 'react'
import logo from '../../../images/territories/escher_synth_still.svg';

export class SynthStill extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="synth_still" data-track="escher" />
      </div>
    )
  }
}

export default SynthStill