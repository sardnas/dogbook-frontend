import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

export default function WeightChart(properties) {
    const size = properties.maxSize;
    const weight = properties.maxWeight;
    const breed = properties.breed;
    const data = [
        { x: 23, y: 0.5, z: 'Chihuahua' },
        { x: 53, y: 3.6, z: 'Border Collie' },
        { x: 81, y: 14.5, z: 'Great Dane' },
        { x: size, y: weight, z: breed },
    ];
    const COLORS = ['#333', '#333', '#333', '#ffffff'];

    return (
        <>
            <ScatterChart
                width={350}
                height={250}
                margin={{
                    top: 30,
                    right: 25,
                    bottom: 0,
                    left: 0,
                }}
            >
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="height" unit="cm" />
                <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                <ZAxis type="string" dataKey="z" name="breed" unit="" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="A school" data={data} fill="#8884d8">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Scatter>
            </ScatterChart>
        </>
    );
}