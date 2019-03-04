import React, { Component } from 'react'

export class SlagFurnace extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="275px" height="174px" className={territoryClassName} data-owner="goliath" data-track="goliath">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-786.000000, -271.000000)" fill="#FFFFFF">
                  <polygon id="Fill-1" points="962.1113 444.408 925.5003 407.797 925.5003 384.408 887.5003 384.408 887.5003 288.408 786.5003 288.408 786.5003 271.408 1060.3493 271.408 1050.4433 308.751 1054.5073 312.815 1021.4863 327.006 1050.5003 356.019 1050.5003 407.797 1013.8883 444.408"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default SlagFurnace