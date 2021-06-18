import React from 'react';
import frog from '../images/frog.jpg';

class Cam extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div style={{ boxShadow: "0px 0px 10px black"}}>
                <img src={frog} style={{maxWidth: "800px"}}></img>
            </div>
        );
    }
}

export default Cam;