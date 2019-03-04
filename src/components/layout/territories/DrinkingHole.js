import React, { Component } from 'react'

export class DrinkingHole extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="182px" height="52px" className={territoryClassName} data-track="delaque">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-560.000000, -424.000000)" fill="#FFFFFF">
                  <polygon id="Fill-33" points="560.5 475.408 741.5 475.408 741.5 424.408 560.5 424.408"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default DrinkingHole