import React, { Component } from 'react'

export class SynthStill extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="135px" height="81px" className={territoryClassName} data-track="escher">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-335.000000, -313.000000)" fill="#FFFFFF">
                  <g id="Group-3" transform="translate(335.000000, 313.000000)">
                      <polygon id="Fill-1" points="0.5004 0.5004 0.5004 80.3254 134.6404 39.5004 57.5004 39.5004 57.5004 18.8814 66.7654 0.5004"></polygon>
                  </g>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default SynthStill