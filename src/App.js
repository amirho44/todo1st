import React, { Component } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';




class App extends Component {
    state = {
        tasks: [
            { taskName: 'make bed', taskPriority: 'routine' },
            { taskName: 'cardio', taskPriority: 'health' },
            { taskName: 'make website styles', taskPriority: 'job' }


        ]
    };

    render() {


        const { tasks } = this.state
        return (
            <div>
                <Header />
                <Todos tasks={tasks} />


            </div>



        )

    }
}

export default App;