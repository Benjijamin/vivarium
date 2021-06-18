import React from 'react';
import {ChromePicker} from 'react-color';
import * as Constants from '../constants';

class Led extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color : {r: 255, g:255, b:255},
            colorhex : "fff"
        }
    }

    handleChange = (c) => {
        this.setState({color: c.rgb, colorhex: c.hex});
    }

    changeLED(){
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.color) 
        };
        fetch(Constants.POSTLED, options);
    }

    render(){
        return (
            <div style={{ boxShadow: "0px 0px 10px black"}}>
                <div style={{ width: "100%", height: "100px", backgroundColor: this.state.colorhex}}></div>
                <ChromePicker
                color = {this.state.color}
                onChange={this.handleChange}
                />
                <button style={{width: "100%", height: "50px"}} onClick={this.changeLED.bind(this)}>Change LED color</button>
            </div>
        );
    }
}

export default Led;