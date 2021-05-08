import React from 'react';
import Todo from './Todo';

const Todos = ({ tasks, taskRemove, taskChange, deltask, State }) => {
    return (


        <div>
            {tasks.map(task => (
                <Todo
                    key={task.id}
                    taskName={task.taskName}
                    remove={() => taskRemove(task.id)}
                    changed={event => taskChange(event, task.id)}
                    omit={deltask}
                    State={State}

                />
            ))}
        </div>
    )

}

export default Todos;