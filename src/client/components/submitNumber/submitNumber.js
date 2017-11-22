"use strict";

import React from 'react';
import './submitNumber.scss';
// import {Link, Redirect} from 'react-router-dom';
import 'whatwg-fetch';
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
        return (
                <div className="numForm"> Screen <br/>
                  <input name="numb" type="text" placeholder="Enter Number" value={this.state.numValue} onChange={this.handleChange}/>
                  <button onClick={this.submitNumberProceed}> Submit </button>
                </div>
        );
    }
}

export default LandingPage;