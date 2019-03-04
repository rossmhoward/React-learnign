import React, { Component } from 'react'

export class NeedleWays extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="390px" height="74px" className={territoryClassName} data-track="delaque">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-166.000000, -233.000000)" fill="#FFFFFF">
                  <polygon id="Fill-7" points="166.5 306.408 166.5 233.408 555.5 233.408 555.5 256.408 407.488 256.312 419.444 287.894 407.725 306.408"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default NeedleWays