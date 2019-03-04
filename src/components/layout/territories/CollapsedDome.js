import React, { Component } from 'react'

export class CollapsedDome extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="164px" height="164px" className={territoryClassName} data-track="unaligned" >
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-1057.000000, -189.000000)" fill="#FFFFFF">
                  <polygon id="Fill-37" points="1105.2412 352.408 1057.5562 304.723 1066.5282 270.908 1057.5562 237.093 1105.2412 189.408 1172.7592 189.408 1220.5002 237.15 1220.5002 304.666 1172.7592 352.408"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default CollapsedDome