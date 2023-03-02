
import '../styles/DogStats.css';
import corgi from '../styles/icons8-corgi.gif';
import HeartButton from './HeartButton';
import '../styles/ResponsiveStats.css';
import React, { Component } from 'react';
import DonutChart from './DonutChart';
import WeightChart from './WeightChart';

class DogStats extends Component {
    constructor(props) {
        console.log(props.data);
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
    /*
    const name = obj.dog[0];
    const min_height = Math.round(obj.dog[1] * 2.54 * 10) / 10;
    const max_height = Math.round(obj.dog[2] * 2.54 * 10) / 10;
    const min_weight = Math.round(obj.dog[3] * 0.45359237 * 10) / 10;
    const max_weight = Math.round(obj.dog[4] * 0.45359237 * 10) / 10;
    const classification = obj.dog[5];
    const obey = parseFloat(obj.dog[6]);
    const obey_inv = 100 - obey;
    const min_reps = obj.dog[7];
    const max_reps = obj.dog[8];
*/
    render() {
        return (
            <>{this.name ? ( //if dog exist we want to display
                <>
                    <div className="rubric"><HeartButton data={this.props} /><img className="margin" src={corgi} /><h1 className="text">{this.name}</h1></div>

                    <div className="verticalSpacingInf" />


                </>
            ) : (
                <div className="rubric"><img className="margin marginLeft" src={corgi} /><h1 className="text">No dogs could be found...</h1></div>
            )}
            </>
        );
    }
};

export default DogStats;
