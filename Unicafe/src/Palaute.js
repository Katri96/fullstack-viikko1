import React from 'react';
import { Button } from './Button'

export class Palaute extends React.Component {
  render() {
    return (
      <div>
        <h1>Palaute</h1>
        {this.props.targets.map((target, index) => {
            return <Button key={index} index={index} target={target} increase={this.props.increase}/>
        })}
      </div>
    );
  }
}
