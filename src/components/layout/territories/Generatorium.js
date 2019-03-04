import React, { Component } from 'react'

export class Generatorium extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="169px" height="165px" className={territoryClassName} data-owner="vansaar" data-track="vansaar">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-742.000000, -100.000000)" fill="#FFFFFF">
                  <polygon id="Fill-21" points="786.418 263.4095 742.5 218.4985 742.5 149.3215 791.413 100.4085 860.587 100.4085 909.501 149.3225 910.29 264.4045"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default Generatorium