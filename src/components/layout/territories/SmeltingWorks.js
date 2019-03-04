import React, { Component } from 'react'

export class SmeltingWorks extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="220px" height="260px" className={territoryClassName} data-track="goliath">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-336.000000, -293.000000)" fill="#FFFFFF">
                  <polygon id="Fill-15" points="336.5 523.4695 336.5 405.2665 480.5 356.2665 480.5 349.0185 506.319 293.4075 555.5 293.4075 555.5 552.3375"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default SmeltingWorks