import React, { Component } from 'react'

export class GamblingDen extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="208px" height="95px" className={territoryClassName} data-track="delaque" >
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-531.000000, -166.000000)" fill="#FFFFFF">
                  <polygon id="Fill-49" points="654.543 191.284 555.5 213.359 555.5 227.408 531.5 227.408 531.5 166.408 738.501 166.408 738.595 224.408 690.697 224.408 654.501 260.604"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default GamblingDen