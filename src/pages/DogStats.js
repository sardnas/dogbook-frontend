
import '../styles/DogStats.css';
import corgi from '../styles/icons8-corgi.gif';
import React from 'react';
import DonutChart from './DonutChart';
import WeightChart from './WeightChart';
import HeartButton from './HeartButton';

const DogStats = (obj) => {
    const name = obj.dog[0];
    const min_height = Math.round(obj.dog[1] * 2.54 * 100) / 100;
    const max_height = Math.round(obj.dog[2] * 2.54 * 100) / 100;
    const min_weight = Math.round((obj.dog[3] / 5.0) * 0.45359237 * 100) / 100;
    const max_weight = Math.round((obj.dog[4] / 5.0) * 0.45359237 * 100) / 100;
    const classification = obj.dog[5];
    const obey = parseFloat(obj.dog[6]);
    const obey_inv = 100 - obey;
    const min_reps = obj.dog[7];
    const max_reps = obj.dog[8];

    const data = [
        { name: 'Obey', value: obey },
        { name: 'Disobey', value: obey_inv },
    ];

    const COLORS = ['#99AA38', '#FF6666'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <><div className="rubric"><HeartButton dog={name} /><img className="margin" src={corgi} /><h1 className="text">{name}</h1></div>

            <div className="verticalSpacingInf" />
            <div className="container">
                <div className="containerRow">
                    <div className="statBox">
                        <DonutChart data={data} />
                    </div>
                    <div className='marginTops'>
                        <WeightChart maxWeight={max_weight} maxSize={max_height} breed={name}></WeightChart>
                    </div>
                </div>
                <div className="verticalSpacingInf" />
                <div className="containerRow">
                    <div className="infoBoxText marginLeft">
                        <h2 className="text">{classification}</h2>
                        <p className="text">Requiers between {min_reps} and {max_reps} reps to learn a new command.</p>
                    </div>
                    <div className="infoBoxText marginLeftSmall">
                        <h2 className="text">Size and weight:</h2>
                        <p className="text">Weight: {min_weight} kg - {max_weight} kg</p>
                        <p className="text">Size: {min_height} cm - {max_height} cm</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default DogStats;
