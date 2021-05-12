import React, { Component, Fragment } from 'react';
import Todos from './components/Todos';
import { ToastContainer, toast } from 'react-toastify'
import todoContext from './context/todoContext';
import Header from './components/Header';
import AddNewTask from './components/AddNewTask';





class App extends Component {

    constructor() {
        super();


    }
    //ES7
    state = {
        tasks: [],
        task: '',
        completed: false,
    };
    //these are methods


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

        console.log(tasks);

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
        todoList = (<Todos
        // tasks={tasks}
        // taskRemove={this.removeTasksFunction}
        // taskChange={this.changeTasksFunction}
        // deltask={this.taskOmitFunction}
        // State={this.state.completed}

        />

        )


        return (
            <todoContext.Provider value={{
                state: this.state,
                addTaskFunction: this.addTaskFunction,
                changeTasksFunction: this.changeTasksFunction,
                taskOmitFunction: this.taskOmitFunction,
                removeTasksFunction: this.removeTasksFunction,
            }}>

                <div className='back'>
                    <Header />
                    <div className=' mainbox m-auto '>
                        {todoList}
                        <form className='addbox' action='#'
                            onSubmit={event => event.preventDefault()}
                        >
                            <button type='submit' className='add-btn' onClick={this.addTaskFunction} ><i class="fas fa-plus plustask mx-1"  ></i>
    Add tasks
    </button>
                            <input type='text' className='addfield' placeholder='add task' onChange={this.setTask} />
                        </form>




                        <ToastContainer />
                    </div>


                </div>
            </todoContext.Provider>

        );
    }
}

export default App;