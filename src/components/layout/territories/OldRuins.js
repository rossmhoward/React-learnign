import React, { Component } from 'react'

export class OldRuins extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="231px" height="228px" className={territoryClassName} data-track="unaligned">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-50.000000, 0.000000)" fill="#FFFFFF">
                  <polygon id="Fill-5" points="96.2901 0.5001 50.9111 109.0171 166.1691 227.4081 280.3531 227.4081 240.5291 0.5001"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default OldRuins