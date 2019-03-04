import React, { Component } from 'react';
import Axios from 'axios';

export class Goliath extends Component {
  state = {
    gangDetails: []
  }

  componentDidMount() {
    Axios.get('https://yaktribe.games/underhive/json/gang/45251.json')
    // This is a promise, when the json is loaded, this will happen.
    .then(res => {
      const gang = res.data;
      console.log(gang);
      this.setState({ gangDetails: gang });
    });
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.gangDetails).map((key) => (
          <div className="container">
            <span className="left">{key}</span>
            <span className="right">{this.state.gangDetails[key].gang_name}</span>
          </div>
        ))}
      </div>
    )
  }
}

export default Goliath
