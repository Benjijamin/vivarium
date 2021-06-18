import React from 'react';
import * as Constants from '../constants';

class Humidif extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            thres: 20
        };
    }

    handleChange(event){
        this.setState({thres : event.target.value});
    }

    componentDidMount(){
        fetch(Constants.GETHUMITHRES)
        .then(response => response.json())
        .then(data => {
            this.setState({ thres : data });
        });
    }

    sendHumiThres(){
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        };
        fetch(Constants.POSTHUMITHRES, options);
    }

    render(){
        return (
            <div>
                <h3>Humidité désirée</h3>
                <input onChangeCapture={this.handleChange.bind(this)} type="range" orient="vertical" value={this.state.thres}></input>
                <h2>{this.state.thres}%</h2>
                <button onClick={this.sendHumiThres.bind(this)}>OK</button>
            </div>
        )
    }
}

export default Humidif;