import React from 'react';

export class Statistiikka extends React.Component {
    render() {
        const positive = 1;
        const negative = -1;
        let sum = 0
        this.props.targets.map((target) => {
            sum = sum + target.value
        })
        let keskiarvo = (positive * this.props.targets[0].value + negative * this.props.targets[2].value) / sum
        if (sum === 0) return (
            <div>
                <h1>Statistiikka</h1>
                <p>ei yhtään palautetta annettu</p>
            </div>)
        return (
            <div>
                <h1>Statistiikka</h1>
                <table>
                    <tbody>
                        {this.props.targets.map((target, index) => {
                            return (<tr key={index}>
                                <th>{target.title}</th>
                                <th>{target.value}</th>
                            </tr>)
                        })}
                        <tr>
                            <th>keskiarvo</th>
                            <th>{Math.round(keskiarvo * 100) / 100}</th>
                        </tr>
                        <tr>
                            <th>positiivisia</th>
                            <th>{Math.round(this.props.targets[0].value / sum * 100 * 100) / 100} %</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}