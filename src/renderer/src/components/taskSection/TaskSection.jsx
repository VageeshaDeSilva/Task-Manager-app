import React from 'react'
import TrashIcon from '../../assets/TrashIcon'
import { toast } from 'react-hot-toast';

function TaskSection(props) {

    const deleteTask = (id) => {
        const newList = props.taskList.filter((task) => task.id !== id);
        props.setTaskList(newList);
        toast.success('Successfully deleted!');
    }

    return (
        <>
            <div className='flex w-72 flex-wrap flex-col'>
                <div className={`flex w-72 h-20 pt-7 ${props.pL} ${props.bgColor} rounded-lg`}>
                    <h4 className="text-l text-white">{props.title}</h4>
                    <span className='text-l text-black ml-4 mt-0.5 bg-white rounded-full h-5 w-5 flex items-center justify-center'>{props.count}</span>
                </div>
                <ul className="w-72 flex flex-col flex-wrap basis-1">
                    {props.section.map((task) => (
                        <div className='w-72 flex flex-wrap mt-5 p-5 rounded-lg shadow-lg cursor-grab relative'>
                            <li key={task.id}>{task.name}</li>
                            <button className='absolute right-1 text-slate-600  hover:bg-red-200 hover:text-red-600 hover:rounded-md' onClick={() => {deleteTask(task.id)}}><span className=''><TrashIcon/></span></button>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TaskSection