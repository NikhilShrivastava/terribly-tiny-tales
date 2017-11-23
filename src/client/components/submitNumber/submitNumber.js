"use strict";

import React from 'react';
import './submitNumber.scss';
import 'whatwg-fetch';
import FinalResult from '../viewResult/viewResult'
import {postData} from '../../lib/fetch';
import {submitNumber as submitNum} from '../../lib/urls';

class LandingPage extends React.Component {
    constructor() {
        super();
        this.submitNumberProceed = this.submitNumberProceed.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            numValue : ''
        };
    }

    submitNumberProceed() {
        const { numValue} = this.state;
        postData('POST', submitNum, {numValue}, (resp) => {
            console.log('Success', resp);
        }, (error) => {
            console.log('Failure', error);
        });
    }

    handleChange(event) {
        this.setState({numValue: event.target.value});
    }

    render() {
        return (<div>
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
                    <div className="numForm"> 
                        <div className="numberContainer">
                            <input name="numb" type="text" placeholder="Enter Number" value={this.state.numValue} onChange={this.handleChange}/>
                            <button onClick={this.submitNumberProceed}> Submit </button>
                        </div>
                    </div>
                    <div>
                        <FinalResult/>
                    </div>
                </div>
        );
    }
}

export default LandingPage;