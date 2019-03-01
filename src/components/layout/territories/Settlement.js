import React, { Component } from 'react'
import logo from '../../../images/territories/unaligned_rogue_doc_shop.svg';

export class RogueDocShop extends Component {
  render() {
    return (
      <div className="territory">
        <img src={logo} className="rogue_doc_shop" data-track="unaligned" />
      </div>
    )
  }
}

export default RogueDocShop