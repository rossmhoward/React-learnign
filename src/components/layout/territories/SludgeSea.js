import React, { Component } from 'react'

export class SludgeSea extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="927px" height="250px" className={territoryClassName} data-track="unaligned">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-411.000000, -424.000000)" fill="#FFFFFF">
                  <polygon id="Fill-41" points="1041.3026 424.4082 1014.3026 451.4082 961.6966 451.4082 934.6966 424.4082 748.5006 424.4082 748.5006 482.4082 561.4996 482.4082 561.4996 558.4762 411.6966 539.5002 451.3736 673.4072 1337.4996 673.4072 1337.4996 464.4082 1182.6596 464.4082 1166.9216 424.4082"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default SludgeSea