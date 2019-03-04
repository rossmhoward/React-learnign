import React, { Component } from 'react'

export class RogueDocShop extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="90px" height="89px" className={territoryClassName} data-track="unaligned">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-560.000000, -293.000000)" fill="#FFFFFF">
                  <polygon id="Fill-25" points="560.5 293.5398 649.542 293.5398 649.542 340.0918 560.5 381.5158"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default RogueDocShop