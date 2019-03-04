import React, { Component } from 'react'

export class MineWorkings extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="331px" height="196px" className={territoryClassName} data-owner="vansaar" data-track="gsc">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(0.000000, -408.000000)" fill="#FFFFFF">
                  <polygon id="Fill-29" points="0.5004 408.408 0.5004 603.273 330.4994 523.514 330.4994 475.408 206.5134 475.408 205.5134 437.408 158.4994 437.408 158.4994 408.408"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default MineWorkings