import React, { Component } from 'react'

export class TollCrossing extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="120px" height="156px" className={territoryClassName} data-track="gsc" >
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-211.000000, -313.000000)" fill="#FFFFFF">
                  <polygon id="Fill-17" points="211.5 468.408 211.5 431.015 264.324 313.408 330.5 313.408 330.5 468.408"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default TollCrossing