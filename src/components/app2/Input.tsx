import React, {ChangeEvent} from 'react';

type InputPropsType = {
    value: string
    setValue: (value: string) => void
}

export const Input: React.FC<InputPropsType> = (props) => {
    const changeInputValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setValue(event.currentTarget.value)
    }

    return (
        <input type="text" value={props.value} onChange={changeInputValueHandler}/>
    );
};

