import React from 'react';


const Todo = ({ taskName, taskPriority, remove }) => {
    return (
        <div className='text-center'>

            <span>{`${taskName} is about ${taskPriority}`}</span>
            <i class="fas fa-check"></i>
            <i onClick={remove} class="fa fa-trash" aria-hidden="true"></i>
        </div>


    );

};
export default Todo;

