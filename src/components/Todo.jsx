import React from 'react';


const Todo = ({ taskName, taskPriority }) => {
    return (
        <div className='text-center'>

            <p>{`${taskName} is about ${taskPriority}`}</p>
            <i></i>
        </div>


    );

};
export default Todo;

