import { createContext } from 'react'


const TodoContext = createContext({

    Todos: [],
    Todo: '',
    NewTask: () => { },
    inputTask: () => { },
    finishTask: () => { },
    deleteTask: () => { }

});

export default TodoContext;