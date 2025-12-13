import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos } = props
  const tab = 'All'
  const filteredTodoList = tab === 'All' ? 
    todos : 
    tab === 'Completed' ? 
      todos.filter(val => val.complete) : 
      todos.filter(val => !val.complete)

  return (
    <>
        {filteredTodoList.map((todo, todoIndex) => {
          return (
            <TodoCard 
              key={todoIndex} 
              todoIndex={todoIndex} 
              todo={todo} />
          )
        })}
    </>
  )
}