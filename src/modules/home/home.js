import React, { Component } from 'react';
import Tabletop from 'tabletop';

import './home.scss';

const SHEET_ID = '17xUhyh4cXO2QmtZ-K14JfLc9HTSNY_GWfz06Ii1DkmY';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      athletes: [],
      matches: [],
    };

    this.userAvatar = this.userAvatar.bind(this);
    this.renderMatch = this.renderMatch.bind(this);
    this.addContentItem = this.addContentItem.bind(this);
  }

  componentWillMount() {
    Tabletop.init({
      key: SHEET_ID,
      callback: (data, tt) => {
        this.setState({
          athletes: data.Athletes.elements,
          matches: data.Matches.elements,
        });
      }
    });
  }

  userAvatar(name) {
    const athlete = this.state.athletes.find((athlete) => athlete.Name === name);
    return athlete ? `https://github.com/${athlete.GitHub}.png?size=40` : '';
  }

  renderMatch(match) {
    return (
      <div><img src={this.userAvatar(match.Athlete_A)} /> vs. <img src={this.userAvatar(match.Athlete_B)} /></div>
    );
  }

  addContentItem() {
    console.log('addContentItem');
  }

  render() {
    const contents = this.state.matches.map((row, index) => {
      return <div key={index}>{this.renderMatch(row)}</div>
    });

    return (
      <div className="home">
        <h3 className="title">Hello React!</h3>
        <input type="text" />
        <button onClick={this.addContentItem}>Add</button>
        <div>{contents}</div>
      </div>
    );
  }
}

export default Home;
