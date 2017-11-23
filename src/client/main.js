"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import { postData } from './lib/fetch';
import { submitNumber as submitNum } from './lib/urls';

class SubmitNumber extends React.Component {
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitNumber = this.submitNumber.bind(this);
        this.state = {
            number: '',
            data: []
        };
}

handleInputChange(event) {
    this.setState({ number: event.target.value });
}

submitNumber() {
    postData('POST', submitNum, { numValue: this.state.number }, (resp) => {
        this.setState({ data: resp.nMostFreqOccurWords });
    }, (error) => {
        console.log('Failure', error);
    });
}

render() {
    return (
        <div>
            <div className="mainHeader">
                <div className="headerText">
                    <ul>
                        <li>
                            <a href="https://github.com/kanikash4/terribly-tiny-tales">Source Code</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="clear-both"></div>
            <div className="submitForm">
                <input value={this.state.number} onChange={this.handleInputChange} />
                <button onClick={this.submitNumber}>Submit</button>
            </div>
            <div className="clear-both"></div>            
            {this.state.data.length > 0 && <div className="resultContainer">
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Count</th>
                        </tr>
                        {this.state.data.map((datum, key) => {
                            return (
                                <tr key={key}>
                                    <td>{datum.name}</td>
                                    <td>{datum.count}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>}
        </div>
    );
}
}

ReactDOM.render(<SubmitNumber />, document.getElementById('app'));