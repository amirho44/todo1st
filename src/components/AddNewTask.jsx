import React from 'react';
import todoContext from '../context/todoContext';  //contxt API




const AddNewTask = () => {
    return (
        <todoContext.Consumer>
            {context => (

                <div>
                    <form className='addbox' action='#'
                        onSubmit={event => event.preventDefault()}
                    >
                        <button type='submit' className='add-btn' onClick={context.addTaskFunction} ><i class="fas fa-plus plustask mx-1"  ></i>
    Add tasks
    </button>
                        <input type='text' className='addfield' placeholder='add task' onChange={context.setTask} />
                    </form>


                </div>

            )}




        </todoContext.Consumer>

    );
}

export default AddNewTask;

