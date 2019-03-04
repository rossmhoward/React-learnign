import React, { Component } from 'react'

export class RefuseDrift extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="160px" height="286px" className={territoryClassName} data-owner="cawdor" data-track="cawdor">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(0.000000, -114.000000)" fill="#FFFFFF">
                  <polygon id="Fill-9" points="0.5004 114.4077 0.5004 399.4077 159.4994 399.4077 159.4994 230.1107 46.7894 114.4077"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default RefuseDrift