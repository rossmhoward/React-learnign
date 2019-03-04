import React, { Component } from 'react'

export class Settlement extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName}>
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="156px" height="124px" className={territoryClassName} data-track="unaligned">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-1181.000000, -57.000000)" fill="#FFFFFF">
                  <polygon id="Fill-47" points="1245.3047 179.6805 1181.5477 57.4085 1336.4997 57.4085 1336.4997 180.4045"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default Settlement