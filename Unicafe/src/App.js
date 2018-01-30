import React, { Component } from 'react';
import './App.css';
import { Palaute } from './Palaute'
import { Statistiikka } from './Statistiikka'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { targets: [{title: "hyvä", value: 0}, {title: "neutraali", value: 0}, {title: "huono", value: 0}] }
    this.increase = this.increase.bind(this);
  }

  increase(target, index){
    let temp = this.state.targets.slice(0);
    temp[index] = {title: target.title, value: target.value + 1};
    this.setState({
      targets: temp
    })
  }

  render() {
    return (
      <div>
        <Palaute targets={this.state.targets} increase={this.increase}/>
        <Statistiikka targets={this.state.targets}/>
      </div>
    );
  }
}

export default App;