import React, { Component } from 'react'

export class BoneShrine extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName}>
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="93px" height="118px" className={territoryClassName} data-owner="cawdor" data-track="cawdor">
          <g id="Page-1" stroke="none" stroke-width="1" fill="#FFFFFF" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-166.000000, -313.000000)" >
                  <polygon id="Fill-19" points="166.5 430.408 166.5 313.408 258.228 313.408 205.676 430.408"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default BoneShrine