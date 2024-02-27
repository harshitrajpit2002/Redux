import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {removeTodo} from '../Feature/Todo/todoSlice'
const Todo = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

return (
  <>
  <div>Todos</div>
  <ul className="list-none">
      {todos.map((todo) => (
        <li
          key={todo.id}
        >
          <div className='text-dark'>{todo.text}</div>
          <button
           onClick={() => dispatch(removeTodo(todo.id))}
          >
             x
          </button>
        </li>
      ))}
    </ul>
  </>
)
}


export default Todo
