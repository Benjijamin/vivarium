import React from 'react';
import * as Constants from '../constants';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryHistogram, VictoryLine } from 'victory';

class Temp extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            temp : [{temp:0, timestamp:0}],
            humi : [{humi:0, timestamp:0}]
        }
    }

    componentDidMount(){
        var self = this;
        this.getHumi();
        this.getTemp();
        setInterval(function(){
            self.getTemp();
            self.getHumi();
        }, 1 * 60 * 1000);
    }

    getTemp(){
        fetch(Constants.GETTEMP)
        .then(response => response.json())
        .then(data => {
            console.log(data[0].timestamp.toString());

            data.map(item => {
                var date = new Date(item.timestamp.toString());
                item.timestamp = date; 
            });

            this.setState({ temp : data })
        });
    }

    getHumi(){
        fetch(Constants.GETHUMI)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            data.map(item => {
                var date = new Date(item.timestamp.toString());
                item.timestamp = date;
            });

            this.setState({ humi : data})
        });
    }

    render(){
        return(
            <div class="container1">
                <div class="temp">
                    <h1>Temperature (°C)</h1>
                    <h4>Temperature courante</h4>
                    {this.state.temp[0].temp}°C
                    <h3>Historique</h3>
                    <div class="chart">
                        <VictoryChart>
                            <VictoryArea
                            data={this.state.temp}
                            x="timestamp"
                            y="temp">
                            </VictoryArea>
                        </VictoryChart>
                    </div>
                </div>
                <div class="humi">
                    <h1>Humidite (%) </h1>
                    <h4>Humidite courante</h4>
                    {this.state.humi[0].humi}%
                    <h3>Historique</h3>
                    <div>
                        <VictoryChart>
                            <VictoryArea
                            data={this.state.humi}
                            x="timestamp"
                            y="humi">
                            </VictoryArea>
                        </VictoryChart>
                    </div>                
                </div>
            </div>
        );
    }
}

export default Temp;