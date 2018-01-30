import React from 'react';

export class Button extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.increase(this.props.target, this.props.index)}>
                    {this.props.target.title}
                </button>
            </div>
        );
    }
}