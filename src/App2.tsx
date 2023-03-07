import React, {useState} from 'react';
import './App.css';
import FullInput from "./components/app2/FullInput";
import {Input} from "./components/app2/Input";
import Btn from "./components/app2/Btn";

export type MessageType = {
    message: string
}

function App2() {
    let [messages, setMessage] = useState<Array<MessageType>>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [InputValue, setValue] = useState('')

    const addMessage = (value: string) => {
        let newMessage = {message: value}
        setMessage([newMessage, ...messages])

    }

    const callBackBtnHandler = () => {
        addMessage(InputValue)
        setValue('')
    }


    return (
        <div className={'App'}>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input value={InputValue} setValue={setValue}/>
            <Btn name={"+"} callBack={callBackBtnHandler}/>
            {messages.map((el, ind) => {
                return (
                    <div key={ind}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App2;
