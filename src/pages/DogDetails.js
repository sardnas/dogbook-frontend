import React from "react";
import Signout from "./Signout";
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import DonutChart from './DonutChart';
import WeightChart from './WeightChart';
import HeartButton from './HeartButton';
import '../styles/DogDetails.css';

const DogDetails = () => {
    const cookies = new Cookies();
    const params = useParams();
    const dogName = params.Name;
    const obj = cookies.get(dogName);
    const thisDog = obj.dog;
    const name = thisDog[0];
    const min_height = Math.round(thisDog[1] * 2.54 * 10) / 10;
    const max_height = Math.round(thisDog[2] * 2.54 * 10) / 10;
    const min_weight = Math.round(thisDog[3] * 0.45359237 * 10) / 10;
    const max_weight = Math.round(thisDog[4] * 0.45359237 * 10) / 10;
    const classification = thisDog[5].toLowerCase();
    const obey = parseFloat(thisDog[6]);
    const obey_inv = 100 - obey;
    const min_reps = thisDog[7];
    const max_reps = thisDog[8];
    const origin = obj.dog[9];
    const img = obj.dog[10];
    let size;
    if (max_weight < 15) {
        size = "small";
    } else if (max_weight >= 15 && max_weight < 50) {
        size = "medium";
    } else {
        size = "big";
    }
    const data = [
        { name: 'Obey', value: obey },
        { name: 'Disobey', value: obey_inv },
    ];

    console.log(thisDog);
    return (
        <>
            <div className="backSignOut">
                <BackToDogopedia />
                <Signout />
            </div>
            <div className="box">
                <div className='imgBox'>
                    <img src={img} label={{ img }} />
                </div>
                <div className="rubric"><HeartButton data={obj} /><h1 className="text">{name}</h1></div>
                <div className="center">
                    <div className="stats">
                        <div className="square">
                            <div className="gapUp" />
                            <h2 className="text">Intelligence & origin</h2>
                            <p className="text">The {name} breed is classified as {classification} and requier between {min_reps} and {max_reps} reps to learn a new command.</p>
                            <p className="text">The {name} originates from {origin}.</p>
                        </div>
                        <div className="gap" />
                        <div className="square">
                            <DonutChart data={data} />
                        </div>
                    </div>
                    <div className="stats">
                        <div className="square">
                            <WeightChart maxWeight={max_weight} maxSize={max_height} breed={name}></WeightChart>
                        </div>
                        <div className="gap" />
                        <div className="square">
                            <h2 className="text">Size and weight</h2>
                            <p className="text">The {name} breed is a {size} sized dog and usually weighs between {min_weight} kg and {max_weight} kg. The size of the {name} is usually between {min_height} cm and {max_height} cm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const BackToDogopedia = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="clickable" onClick={() => navigate('/user/dogopedia')}>&#11013;</div>
        </>
    );
};

export default DogDetails;
