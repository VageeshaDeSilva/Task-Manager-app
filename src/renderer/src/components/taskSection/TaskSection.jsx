import React from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core';
import Task from '../task/Task';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';


function TaskSection(props) {
    const onDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            props.setTaskList((prev) => {
                const oldIndex = prev.findIndex((task) => task.id === active.id);
                const newIndex = prev.findIndex((task) => task.id === over.id);
                return arrayMove(prev, oldIndex, newIndex);
            });
        }
    }

    return (
        <>
            <div className='flex w-96 flex-wrap flex-col'>
                <div className={`flex w-96 h-20 justify-center gap-5 pt-7 bg-primaryColor rounded-lg`}>
                    <h4 className="text-l text-fontColor">{props.title}</h4>
                    <span className='text-l text-black mt-0.5 bg-fontColor rounded-full h-5 w-5 flex items-center justify-center'>{props.count}</span>
                </div>
                <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                    <SortableContext items={props.taskList} strategy={verticalListSortingStrategy}>
                        <ul className="w-96 flex flex-col flex-wrap basis-1">
                            {props.section.map((task) => (
                                <Task key={task.id} task={task} taskList={props.taskList} setTaskList={props.setTaskList} />
                            ))}
                        </ul>
                    </SortableContext>
                </DndContext>
            </div>
        </>
    )
}

export default TaskSection