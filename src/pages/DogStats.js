/*
import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
*/
import React from "react";
import '../styles/DogStats.css';
import corgi from '../styles/icons8-corgi.gif';
/*
ChartJS.register(...registerables);
ChartJS.register(ChartDataLabels);
*/
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
    /*
        const doughnutData = {
            labels: ['% Probability to disobey', '% Probability to obey'],
            datasets: [
                {
                    label: '',
                    data: [obey_inv, obey],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        };
    */

    return (
        <><div className="rubric"><img className="margin" src={corgi} /><h1 className="text">{name}</h1></div>

            <div className="verticalSpacingInf" />
            <div className="container">
                <div className="containerRow">
                    <div className="infoBox"></div>
                    <div className="infoBoxText">
                        <h2 className="text">{classification}</h2>
                        <p className="text">Requiers between {min_reps} and {max_reps} reps to learn a new command.</p>
                    </div>
                </div>
                <div className="verticalSpacingInf" />
                <div className="containerRow">
                    <div className="infoBoxText">
                        <h2 className="text">Size and weight:</h2>
                        <p className="text">Weight: {min_weight} kg - {max_weight} kg</p>
                        <p className="text">Size: {min_height} cm - {max_height} cm</p>
                    </div>
                    <div className="infoBox"></div>
                </div>
            </div>
        </>
    );
};

export default DogStats;
