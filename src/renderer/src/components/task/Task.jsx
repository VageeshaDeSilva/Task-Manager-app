import React from 'react'
import TrashIcon from '../../assets/TrashIcon'
import { toast } from 'react-hot-toast';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function Task(props) {

    const [mouseEnter, setMouseEnter] = React.useState(false);

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
        <div ref={setNodeRef} style={style} className={`w-96 flex flex-wrap mt-5 p-5 rounded-lg shadow-lg relative bg-primaryColorDark text-white text-lg shadow-indigo-500/40 hover:shadow-100 hover:shadow-white hover:bg-primaryColor`}
            onMouseEnter={() => {
                setMouseEnter(true);
            }}
            onMouseLeave={() => {
                setMouseEnter(false);
            }}
        >
            <div className='cursor-grab grow' {...attributes} {...listeners}>
                <li>{props.task.name}</li>
            </div>
            <div className='absolute right-1 w-6'>
                {mouseEnter && (<button className=' text-white  hover:bg-red-200 hover:text-red-600 hover:rounded-md'
                    onClick={() => {
                        deleteTask(props.task.id);
                    }}
                >
                    <span className=''><TrashIcon /></span>
                </button>)}
            </div>

        </div>
    )
}

export default Task