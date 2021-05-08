import React from 'react';


const Todo = ({ taskName, remove, omit, State }) => {





    return (
        <div className='text-left p-2 taskcap'>


            <i class="fas fa-check" onClick={omit}></i>
            <i onClick={remove} class="fa fa-trash" aria-hidden="true"></i>

            <span>

                {State ? <del>{taskName}</del> : taskName}
            </span>
        </div>


    );

};
export default Todo;


// <input type='text' placeholder={taskName} onChange={changed} />
