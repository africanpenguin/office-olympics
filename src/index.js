import React from 'react';
import ReactDOM from 'react-dom';
import Tabletop from 'tabletop';


const sheet_id = '17xUhyh4cXO2QmtZ-K14JfLc9HTSNY_GWfz06Ii1DkmY';

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      athletes: [],
      matches: [],
    };
  }

  componentWillMount() {
    Tabletop.init({
      key: sheet_id,
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
    return athlete ? `https://github.com/${athlete.GitHub}.png?size=40`: '';
  }

  renderMatch(match) {
    return (
      <div><img src={this.userAvatar(match.Athlete_A)}/> vs. <img src={this.userAvatar(match.Athlete_B)}/></div>
    )
  }

  render() {
    const contents = this.state.matches.map((row, index) => {
      return <div key={index}>{this.renderMatch(row)}</div>
    });
    return (
      <div>
        <h3>Hello React!</h3>
        <input type="text" />
        <button onClick={() => this.addContentItem()}>Add</button>
        <div>{contents}</div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("index"));
