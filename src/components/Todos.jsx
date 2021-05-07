import React from 'react';
import Todo from './Todo';

const Todos = ({ tasks, taskRemove }) => {
    return (


        <div>
            {tasks.map(task => (
                <Todo
                    taskName={task.taskName}
                    taskPriority={task.taskPriority}
                    key={task.id}
                    remove={() => taskRemove(task.id)}

                />
            ))}
        </div>
    )

}

export default Todos;