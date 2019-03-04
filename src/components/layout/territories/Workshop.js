import React, { Component } from 'react'

export class Workshop extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="156px" height="87px" className={territoryClassName} data-owner="none" data-track="unaligned">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Group-51" transform="translate(-400.000000, -262.000000)" fill="#FFFFFF">
              <polygon id="Fill-13" points="400.5 348.408 400.5 333.039 427.118 285.792 415.797 262.408 555.5 262.408 555.5 287.408 500.711 287.408 501.448 288.917 474.677 348.408"></polygon>
            </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default Workshop