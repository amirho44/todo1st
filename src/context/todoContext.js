import { createContext } from 'react'


const todoContext = createContext({

    state: {},
    addTaskFunction: () => { },
    removeTasksFunction: () => { },
    changeTasksFunction: () => { },
    taskOmitFunction: () => { },
    setTask: () => { },
    State: {}

});

export default todoContext;