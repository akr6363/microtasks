import React from 'react';
import {Button} from "./Button";
import {FilterType} from "../App";

type currentMoneyType = {
    banknote: string
    value: number
    number: string
}

type NewComponentPropsType = {
    currentMoney: Array<currentMoneyType>
    onClickFilterHandler: (baNnknote: FilterType) => void
}

const NewComponent = (props: NewComponentPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>  {item.banknote}</span>
                            <span>  {item.value}</span>
                            <span>  {item.number}</span>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at earum facilis quasi ratione! Aspernatur blanditiis dolorum et explicabo facere neque sunt tempora voluptate! Cum dolore id quidem repellendus voluptatum.
                            </span>

                        </li>
                    )
                })}
            </ul>
            <div>
                <Button name={'Ruble'} callBack={() => props.onClickFilterHandler('ruble')}/>
                <Button name={'Dollars'} callBack={() => props.onClickFilterHandler('Dollars')}/>
                <Button name={'all'} callBack={() => props.onClickFilterHandler('all')}/>
            </div>
        </>
    );
};


export default NewComponent;