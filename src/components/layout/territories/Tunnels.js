import React, { Component } from 'react'

export class Tunnels extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="105px" height="47px" className={territoryClassName} data-track="gsc">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-1056.000000, -360.000000)" fill="#FFFFFF">
                  <polygon id="Fill-11" points="1056.5 406.408 1056.5 360.408 1141.663 360.408 1160.259 406.408"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default Tunnels