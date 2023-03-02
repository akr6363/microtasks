import React from 'react';

type CarType = {
    manufacturer: string
    model: string
}

type TopCarsListPropsType = {
    cars: Array<CarType>
}

const TopCarsList: React.FC<TopCarsListPropsType> = (props) => {
    return (
        <table>
            <caption>Top Cars</caption>
            <thead>
            <tr>
                <th>№ п/п</th>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            </thead>
            {props.cars.map((car, index) => {
                return (
                    <tbody key={index}>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>
                    </tbody>
                )
            })}
        </table>
    );
};

export default TopCarsList