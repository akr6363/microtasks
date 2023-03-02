import React, {useState} from 'react';
import './App.css';
import StudentsList from "./components/StudentsList";
import TopCarsList from "./components/TopCarsList";
import {Button} from "./components/Button";
import {clearLine} from "readline";
import NewComponent from "./components/NewComponent";

export type FilterType  = 'all' | 'ruble' | 'Dollars'

function App() {

    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const Button1Foo = (name: string, age: number) => {
        console.log(`Im ${name} age: ${age}`)
    }

    const Button2Foo = (name: string) => {
        console.log(`Im ${name}`)
    }

    const Button3Foo = () => {
        console.log('I am stupid button')
    }

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickHandler2 = () => {
        setA(a = 0)
        console.log(a)
    }

    const [money, setMoney] = useState([
        {banknote: 'Dollars', value: 100, number: ' a1234567890'},
        {banknote: 'Dollars', value: 50, number: ' z1234567890'},
        {banknote: 'ruble', value: 100, number: ' w1234567890'},
        {banknote: 'Dollars', value: 100, number: ' e1234567890'},
        {banknote: 'Dollars', value: 50, number: ' c1234567890'},
        {banknote: 'ruble', value: 100, number: ' r1234567890'},
        {banknote: 'Dollars', value: 50, number: ' x1234567890'},
        {banknote: 'ruble', value: 50, number: ' v1234567890'},
    ])

    let [nameBtn, setNameBtn] = useState<FilterType>('all')

    let currentMoney = money
    if (nameBtn === 'ruble') {
        currentMoney = money.filter((el) => el.banknote === 'ruble')
    }
    if (nameBtn === 'Dollars') {
        currentMoney = money.filter((el) => el.banknote === 'Dollars')
    }

    const onClickFilterHandler = (banknote: FilterType) => {
       setNameBtn(banknote)
    }

    return (

        <>
            {/*<StudentsList students={students}/>*/}
            {/*<TopCarsList cars = {topCars}/>*/}

            {/*<Button name={'MyYouTubeChanel - 1'} callBack={() => Button1Foo('Vasya', 21)}/>*/}
            {/*<Button name={'MyYouTubeChanel - 2'} callBack={() => Button2Foo('Petya')}/>*/}
            {/*<Button name={'Button'} callBack={Button3Foo}/>*/}

            {/*<h1>{a}</h1>*/}
            {/*<button onClick={onClickHandler}>number</button>*/}
            {/*<button onClick={onClickHandler2}>0</button>*/}

            <NewComponent currentMoney = {currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        </>
    )
}

export default App;
