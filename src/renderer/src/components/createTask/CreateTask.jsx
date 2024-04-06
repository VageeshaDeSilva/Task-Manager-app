import React, { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-hot-toast'

function CreateTask(props) {
    const task=props.task;
    const setTask = props.setTask;

    const addBtnOnClick = () => {
        const newList = [...props.taskList,task];
        if(task.name === ""){
            toast.error("Task name cannot be empty");
            return 
        }
        if(task.name.length >100){
            toast.error("Task want be minimum of 100 letters");
            return 
        }
        props.setTaskList(newList);
        toast.success('Successfully added!')
        setTask({id: '', name: '', status: 'todo'});
    }

    useEffect(() => {
        // console.log(props.taskList);
    }, [props.taskList]);

    return (
        <>
            <div className="flex flex-row justify-center mb-10">
                <input
                    type="text"
                    placeholder="Add Task"
                    className="rounded border h-10 w-96 border-black mr-2 px-1"
                    value={task.name}
                    onChange={(e) => setTask({id: uuidv4(), name: e.target.value ,status:"todo" })}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 w-24 px-4 rounded" onClick={addBtnOnClick}>
                    Add
                </button>
            </div>
        </>
    )
}

export default CreateTask
