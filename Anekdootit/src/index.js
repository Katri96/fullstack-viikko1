import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    let votes = new Array(anecdotes.length).fill(0);
    this.state = {
      selected: 0,
      votes: votes
    }
    this.randomize = this.randomize.bind(this);
    this.vote = this.vote.bind(this);
  }

  randomize() {
    this.setState({
      selected: Math.floor(Math.random() * anecdotes.length)
    })
  }

  vote() {
    let temp = this.state.votes.slice(0);
    temp[this.state.selected] = temp[this.state.selected] + 1;
    this.setState({
      votes: temp
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <button onClick={this.randomize}>Next</button>
        <button onClick={this.vote}>Vote</button>
        <span> Has {this.state.votes[this.state.selected]} votes.</span>
        <h1>Most votes!</h1>
        <p>{this.props.anecdotes[this.state.votes.indexOf(Math.max(...this.state.votes))]}</p>
        <p>{Math.max(...this.state.votes)} votes.</p>
      </div>
    )
  }
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
