import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";


export type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}


function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(taskId: string, todoListId: string) {
        let filteredTasks = tasks[todoListId].filter(t => t.id != taskId);
        setTasks({...tasks, [todoListId]: filteredTasks});
    }

    function addTask(title: string, todoListId: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks[todoListId]];
        setTasks({...tasks, [todoListId]: newTasks});
    }

    function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
        let newTasks = tasks[todoListId]
            .map((task) => task.id === taskId ? {...task, isDone: isDone} : task)
        setTasks({...tasks, [todoListId]: newTasks});
    }

    function sortTasks(tasks: TaskType[], filter: FilterValuesType) {
        switch (filter) {
            case 'active':
                return tasks.filter(t => !t.isDone)

            case 'completed':
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }


    function changeFilter(value: FilterValuesType, todoListId: string) {
        setTodolists(todolists
            .map(tl => tl.id === todoListId ? {...tl, filter: value} : tl))

    }


    return (
        <div className="App">
            {todolists.map((tl) => {
                return (
                    <Todolist id={tl.id}
                        title={tl.title}
                              tasks={sortTasks(tasks[tl.id], tl.filter)}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeStatus}
                              filter={tl.filter}/>
                )
            })}

        </div>
    );
}

export default App;
