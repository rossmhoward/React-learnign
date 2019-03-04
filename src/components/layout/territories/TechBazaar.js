import React, { Component } from 'react'

export class TechBazaar extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="90px" className={territoryClassName} data-track="vansaar" height="90px">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Group-51" transform="translate(-560.000000, -198.000000)" fill="#FFFFFF">
                <polygon id="Fill-3" points="560.5 287.4505 560.5 218.3085 649.542 198.5315 649.542 287.4505"></polygon>
            </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default TechBazaar