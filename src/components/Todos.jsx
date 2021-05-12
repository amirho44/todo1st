import React from 'react';
import todoContext from '../context/todoContext';
import Todo from './Todo';

const Todos = () => {
    return (


        <todoContext.Consumer>
            {context => (<div>
                {context.state.tasks.map(task => (
                    <Todo
                        key={task.id}
                        taskName={task.taskName}
                        remove={() => context.removeTasksFunction(task.id)}
                        changed={event => context.changeTasksFunction(event, task.id)}
                        omit={context.taskOmitFunction}
                        State={context.state.completed}


                    />
                ))}
            </div>)


            }


        </todoContext.Consumer>



    )

}

export default Todos;