import React, { Component } from 'react'

export class Archaeotech extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="112px" height="87px" data-track="vansaar" >
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-272.000000, -141.000000)" fill="#FFFFFF">
                  <polygon id="Fill-35" points="286.4258 227.408 272.5868 141.408 383.4998 141.408 383.4998 227.408"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default Archaeotech