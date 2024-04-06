import React from 'react'
import { useState, useEffect } from 'react'
import TaskSection from '../taskSection/TaskSection';

function TaskList(props) {

    const [toDo, setToDo] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);

    useEffect(() => {
        //this will filter the task based on status and add it to 3 arrays
        const toDoList = (props.taskList).filter((task) => task.status === 'todo');
        const inProgressList = (props.taskList).filter((task) => task.status === 'inprogress');
        const doneList = (props.taskList).filter((task) => task.status === 'done');

        setToDo(toDoList);
        setInProgress(inProgressList);
        setDone(doneList);

        // console.log(props.taskList);
        // console.log(toDoList.length);

    }, [props.taskList]);


    return (
        <>
            <div className='flex gap-52 justify-center flex-wrap'>
                <TaskSection title="TODO" section={toDo} count={toDo.length} bgColor="bg-blue-500" pL="pl-28" taskList={props.taskList} setTaskList={props.setTaskList}/>
                <TaskSection title="INPROGRESS" section={inProgress} count={inProgress.length} bgColor="bg-red-500" pL="pl-20" taskList={props.taskList} setTaskList={props.setTaskList}/>
                <TaskSection title="DONE" section={done} count={done.length} bgColor="bg-green-500" pL="pl-28" taskList={props.taskList} setTaskList={props.setTaskList}/>
            </div>
        </>
    )
}

export default TaskList