import React, { Component } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/taskEnter';




class App extends Component {

    constructor() {
        super();


    }
    //ES7
    state = {
        tasks: [
            { id: 1, taskName: 'make bed', taskPriority: 'routine' },
            { id: 2, taskName: 'cardio', taskPriority: 'health' },
            { id: 3, taskName: 'make website styles', taskPriority: 'job' }


        ],
        showTasks: false
    };
    //these are methods
    showTasksFunction = () => {
        this.setState({ showTasks: !this.state.showTasks })
    }

    // addTasks = ()=>{

    // }

    removeTasksFunction = id => {
        const tasks = [...this.state.tasks];
        const filteredTasks = tasks.filter(t => t.id !== id)
        this.setState({ tasks: filteredTasks });

    };

    render() {
        const { tasks, showTasks } = this.state;
        let todoList = null;


        if (showTasks) {
            todoList = (<Todos
                tasks={tasks}
                taskRemove={this.removeTasksFunction}
            />)
        }

        return (
            <div>
                <Header />
                {todoList}
                <Footer />
                <button className='btn btn-danger text-center d-flex justify-content-center mx-auto' onClick={this.showTasksFunction} >
                    Change tasks
                </button>


            </div>



        )

    }
}

export default App;