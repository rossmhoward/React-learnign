import React, { Component } from 'react'

export class PromethiumCache extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="142px" height="101px" className={territoryClassName} data-owner="goliath" data-track="unaligned">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-917.000000, -165.000000)" fill="#FFFFFF">
                  <polygon id="Fill-43" points="917.5 265.408 917.5 165.408 989.797 165.408 1054.892 228.616 1050.443 233.065 1059.023 265.408"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default PromethiumCache