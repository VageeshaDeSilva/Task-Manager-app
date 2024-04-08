import { useState } from 'react'
import './App.css';
import CreateTask from './createTask/CreateTask'
import TaskList from './taskList/TaskList'
import { Toaster } from 'react-hot-toast';
// import Swal from 'sweetalert2'

function App() {

  //this is task object , want to add taskList
  const [task, setTask] = useState({
    id: '',
    name: '',
    status: 'todo' //todo , inprogress , done
  })

  //this is main task list
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <div className='container'>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold pt-16 text-primaryColor">My To Do List</h1>
          <div className='mt-14'>
            <CreateTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
            <TaskList taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
          </div>
        </div>

        {/* this is toaster from react-hot-toast library */}
        <Toaster />
      </div>
    </>
  )
}

export default App
