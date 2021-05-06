import React from 'react';
import Todo from './Todo';

const Todos = ({ tasks }) => {
    return (


        <div>
            {tasks.map(task => (
                <Todo
                    taskName={task.taskName}
                    taskPriority={task.taskPriority}

                />
            ))}
        </div>
    )

}

export default Todos;