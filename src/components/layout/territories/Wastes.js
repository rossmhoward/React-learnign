import React, { Component } from 'react'

export class Wastes extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="191px" height="269px" className={territoryClassName}data-owner="gsc" data-track="unaligned">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-1147.000000, -189.000000)" fill="#FFFFFF">
                  <polygon id="Fill-39" points="1181.1555 189.4083 1227.5005 236.7383 1227.5005 305.0773 1174.2105 359.4083 1147.7415 359.4083 1187.3365 457.4073 1337.4995 457.4073 1337.4995 189.4083"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default Wastes