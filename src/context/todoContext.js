import { createContext } from 'react'


const TodoContext = createContext({

    lists: [],
    list: '',
    NewTask: () => { },
    inputTask: () => { },
    finishTask: () => { },
    deleteTask: () => { }

});

export default TodoContext;