import React, { Component } from 'react'

export class NarcoDen extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName}>
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="182px" height="87px" className={territoryClassName} data-track="escher" >
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-560.000000, -330.000000)" fill="#FFFFFF">
                  <polygon id="Fill-27" points="560.5 416.408 560.5 388.618 654.542 344.728 654.542 330.408 658.697 330.408 690.697 362.408 741.5 362.408 741.5 416.408"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default NarcoDen