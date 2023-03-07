import React, {ChangeEvent, useState} from 'react';
import {MessageType} from "../../App2";


type FullInputPropsType = {
    addMessage: (value: string) => void
}

const FullInput: React.FC<FullInputPropsType> = (props) => {

    let [value, setValue] = useState('')
    console.log(value)
    
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addMessage(value)
        setValue('')
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} value={value} type="text"/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

export default FullInput;