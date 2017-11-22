import React from 'react';
import './viewResult.scss';
import 'whatwg-fetch';
import {getData} from '../../lib/fetch';
import {getResult as getFileResult} from '../../lib/urls';


class ResultPage extends React.Component {
    constructor() {
        super();
        this.viewNFreqWords = this.viewNFreqWords.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            numValue : 0
        };
    }

    viewNFreqWords() {
        var rows= [];
        const {numValue} = this.state;
    }

    handleChange(event) {
        this.setState({numValue: event.target.value});
    }

    render() {
        return (
                <div className="numForm">Screen<br/>
                  <input name="numb" type="text" placeholder="Enter Number" value={this.state.numValue} onChange={this.handleChange}/>
                  <button onClick={this.submitNumberProceed}> Submit </button>
                </div>

                <div className="wordResult">
                    <div> N-most frequent occuring word in file:<br/>
                    //label
                    <button onClick={this.viewNFreqWords}> Submit </button>
                    </div>
                <div>

                <div className="nWordsResultTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Words</th>
                                <th>Count</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
        );
    }
}

export default ResultPage;