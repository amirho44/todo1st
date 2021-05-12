import React from 'react';


const Todo = ({ key, taskName, remove, omit, State }) => {

    console.log(key);

    return (
        <div className='text-left p-2 taskcap'>


            <i className="fas fa-check" onClick={omit}></i>
            <i onClick={remove} className="fa fa-trash" aria-hidden="true"></i>

            <span>

                {State ? <del className='del'>{taskName}</del> : taskName}

            </span>
        </div>


    );

};
export default Todo;


// <input type='text' placeholder={taskName} onChange={changed} />
