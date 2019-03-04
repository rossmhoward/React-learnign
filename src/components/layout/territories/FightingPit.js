import React, { Component } from 'react'

export class FightingPit extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="126px" height="126px" data-track="goliath">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-654.000000, -230.000000)" fill="#FFFFFF">
                  <polygon id="Fill-23" points="691.1113 355.408 654.5003 318.797 654.5003 267.02 691.1113 230.408 742.8883 230.408 779.5003 267.02 779.5003 318.797 742.8883 355.408"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default FightingPit