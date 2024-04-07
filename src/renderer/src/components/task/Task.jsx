import React from 'react'
import TrashIcon from '../../assets/TrashIcon'
import { toast } from 'react-hot-toast';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function Task(props) {

    const deleteTask = (id) => {
        const newList = props.taskList.filter((task) => task.id !== id);
        props.setTaskList(newList);
        toast.success('Successfully deleted!');
    }

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.task.id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }

    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style} className={`w-72 flex flex-wrap mt-5 p-5 rounded-lg shadow-lg cursor-grab relative `}>
            <li>{props.task.name}</li>
            <button className='absolute right-1 text-slate-600  hover:bg-red-200 hover:text-red-600 hover:rounded-md'
                onClick={() => {
                    deleteTask(props.task.id);
                }}
            >
                <span className=''><TrashIcon /></span>
            </button>
        </div>
    )
}

export default Task