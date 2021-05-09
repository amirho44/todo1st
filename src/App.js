import React, { Component, Fragment } from 'react';
import Todos from './components/Todos';
import { ToastContainer, toast } from 'react-toastify'





class App extends Component {

    constructor() {
        super();


    }
    //ES7
    state = {
        tasks: [],
        task: '',
        completed: false,
        showTasks: true
    };
    //these are methods
    showTasksFunction = () => {
        this.setState({ showTasks: !this.state.showTasks })
    }


    addTaskFunction = () => {
        //duplicate of tasks in array
        const tasks = [...this.state.tasks]
        const task = {
            id: Math.floor(Math.random() * 1000),
            taskName: this.state.task

        }
        tasks.push(task)
        this.setState({ tasks: tasks, task: '' });

        toast.success('task added', {
            position: 'bottom-left'
        })


    }

    setTask = event => {
        this.setState({ task: event.target.value })
    }


    removeTasksFunction = id => {
        const tasks = [...this.state.tasks];
        const filteredTasks = tasks.filter(t => t.id !== id)
        this.setState({ tasks: filteredTasks });
        toast.error('task removed', {
            position: 'bottom-left'
        })

    };


    changeTasksFunction = (event, id) => {
        const { tasks: alltasks } = this.state;

        const taskIndex = alltasks.findIndex(t => t.id === id)
        const task = alltasks[taskIndex];
        task.taskName = event.target.value;
        console.log(event);

        const tasks = [...alltasks]

        alltasks[taskIndex] = task;
        this.setState({ tasks: tasks })


    }


    taskOmitFunction = () => {

        const tasks = [...this.state.tasks]
        const state = this.state.completed

        this.setState({ completed: !this.state.completed })
        console.log(state);
    }

    render() {
        const { tasks, showTasks, completed } = this.state;
        let todoList = null;


        return (

            <div className='d-flex mainbox m-auto p-5 '>




                <Todos
                    tasks={tasks}
                    taskRemove={this.removeTasksFunction}
                    taskChange={this.changeTasksFunction}
                    deltask={this.taskOmitFunction}
                    State={this.state.completed}

                />






                <div className='d-flex row addbox'>
                    <button className='d-flex add-btn text-center d-flex justify-content-center mx-auto' onClick={this.addTaskFunction} ><i class="fas fa-plus plustask mx-1" onClick={this.addTaskFunction} ></i>
                        Add tasks
                </button>

                    <input type='text' className='addfield d-flex text-center d-flex justify-content-center mx-auto' placeholder='add task' onChange={this.setTask} />
                </div>
                <ToastContainer />

                <button className='d-flex btn btn-danger text-center d-flex justify-content-center mx-auto' onClick={this.showTasksFunction} >
                    Show tasks
                </button>
            </div>





        );

    }
}

export default App;