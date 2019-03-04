import React, { Component } from 'react'

export class CorpseFarm extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="134px" height="122px" className={territoryClassName} data-track="cawdor">
            <g id="Page-1" stroke="none" stroke-width="1"  fill="#FFFFFF" fill-rule="evenodd">
                <g id="Group-51" transform="translate(-747.000000, -295.000000)">
                    <polygon id="Fill-31" points="747.5 416.408 747.5 360.211 786.5 321.211 786.5 295.408 880.5 295.408 880.5 416.408"></polygon>
                </g>
            </g>
        </svg>
      </div>
    )
  }
}

export default CorpseFarm