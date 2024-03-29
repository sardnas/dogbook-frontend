
import '../styles/DogStats.css';
import corgi from '../styles/icons8-corgi.gif';
import React from 'react';
import DonutChart from './DonutChart';
import WeightChart from './WeightChart';
import HeartButton from './HeartButton';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const DogStats = (obj) => {
    const navigate = useNavigate();
    const cookies = new Cookies();
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
    const origin = obj.dog[9];
    const img = obj.dog[10];
    const data = [
        { name: 'Obey', value: obey },
        { name: 'Disobey', value: obey_inv },
    ];

    const handleButtonClick = () => {
        const urlName = name.toLowerCase().replaceAll(" ", "-");
        cookies.set(`${urlName}`, obj, {
            path: '/',
            sameSite: 'none',
            secure: true,
        });
        navigate(`dog/${urlName}`);
    }

    return (
        <>{obj.dog[0] ? ( //if dog exist we want to display
            <>
                <div className="rubric"><HeartButton data={obj} /><img className="margin" src={corgi} /><h1 className="text">{name}</h1></div>
                <div className="container">
                    <div className="containerRow">
                        <div className="horizontalSpacing"></div>
                        <div className="statBox">
                            <div className='verticalSpacingInf'></div>
                            <h3 className='text'>Origin: {origin}</h3>
                            <div className='imageBox'>

                                <img src={img} label={{ img }} />
                            </div>
                        </div>
                        <div className="horizontalSpacing"></div>
                        <div className="statBox">

                            <DonutChart data={data} />
                        </div>
                    </div>
                </div>
                <div className='goToPageButton' onClick={handleButtonClick}>&#128062; Go to {name} page &#128062;</div>

            </>
        ) : (
            <>
                <div className="rubric"><img className="margin marginLeft" src={corgi} /><h1 className="text">No dogs could be found...</h1></div>
                <div className="verticalSpacingInf" />
            </>
        )}
        </>
    );
};

export default DogStats;
