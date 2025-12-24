import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos, selectedTab, putInputAtTodoIndex } = props
  // todolist is filtered depending on the tab
  const filteredTodoList = selectedTab === 'All' ? 
    todos : 
    selectedTab === 'Completed' ? 
      todos.filter(val => val.complete) : 
      todos.filter(val => !val.complete)

  return (
    <>
        {filteredTodoList.map((todo, todoIndex) => {
          return (
            <TodoCard 
              key={todoIndex}
              todoIndex={todos.findIndex(val => val.input == todo.input)}
              todo={todo}
              insertInput={(todoIndex === putInputAtTodoIndex ? true : false)}
              {...props}
            />
          )
        })}
    </>
  )
}