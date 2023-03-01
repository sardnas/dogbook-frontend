import '../styles/ResponsiveStats.css';
import React, { Component } from 'react';
import DonutChart from './DonutChart';
import WeightChart from './WeightChart';

class ResponsiveDogStats extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = ({
            startWin: true,
            sizeWin: true,
            obeyWin: true
        })
        this.name = props.data[0];
        this.minHeight = props.data[1];
        this.maxHeight = props.data[2];
        this.minWeight = props.data[3];
        this.maxWeight = props.data[4];
        this.classification = props.data[5];
        this.obey = props.data[6];
        this.minReps = props.data[7];
        this.maxReps = props.data[8];

    }
    handleClickStart = () => {
        this.setState({ startWin: true, sizeWin: false, obeyWin: false });
    }
    handleClickSize = () => {
        this.setState({ startWin: false, sizeWin: true, obeyWin: false });
    }
    handleClickObey = () => {
        this.setState({ startWin: false, sizeWin: false, obeyWin: true });
    }

    render() {
        return (
            <>
                <div className='containMenu'>
                    <div className='statButton' onClick={this.handleClickStart}>start</div>
                    <div className='statButton' onClick={this.handleClickSize}>size</div>
                    <div className='statButton' onClick={this.handleClickObey}>obey</div>
                </div>
                {this.state.startWin ? (
                    <>
                        <h1>start</h1>
                    </>
                ) : this.state.sizeWin ? (
                    <>
                        <WeightChart maxWeight={this.maxWeight} maxSize={this.maxHeight} breed={this.name}></WeightChart>
                    </>
                ) : this.state.obeyWin ? (
                    <>
                        <h1>obey</h1>
                    </>
                ) : (
                    <></>
                )}
            </>
        );
    }
}

export default ResponsiveDogStats;