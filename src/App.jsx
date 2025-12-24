import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

function App() {
  // const todos = [
  //   {input: 'Brush your teeth twice a day', complete: true},
  //   {input: 'Follow your routine', complete: true},
  //   {input: 'Achieve your dreams', complete: false},
  //   {input: 'Bath everyday', complete: true},
  // ]

  const [todos, setTodos] = useState([
    {input: 'Brush your teeth twice a day', complete: true}
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

  const [editTab, setEditTab] = useState(false)
  const [putInputAtTodoIndex, setPutInputAtTodoIndex] = useState(null)  // Tracks the currently being edited todo

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleEditTodo(index, updatedText) {
    setPutInputAtTodoIndex(index)
  }

  function handleSaveEdit(index, updatedText) {
    let newTodo = {input: updatedText, 'complete': false}
    let newTodoList = [...todos]
    newTodoList[index] = newTodo
    setTodos(newTodoList)
    setPutInputAtTodoIndex(null)
    setSelectedTab('Open')
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index 
    })
    if (index === putInputAtTodoIndex) { setPutInputAtTodoIndex(null) }
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    // update/edit/Modify
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }


  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = []
    db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    <>
        <Header todos={todos} />

        <Tabs 
        setPutInputAtTodoIndex={setPutInputAtTodoIndex}
        selectedTab={selectedTab} 
        setSelectedTab={setSelectedTab} 
        todos={todos} 
        />

        <TodoList
        handleSaveEdit={handleSaveEdit}
        putInputAtTodoIndex={putInputAtTodoIndex}
        setPutInputAtTodoIndex={setPutInputAtTodoIndex}
        setEditTab={setEditTab} 
        editTab={editTab} 
        handleEditTodo={handleEditTodo} 
        handleCompleteTodo={handleCompleteTodo} 
        handleDeleteTodo={handleDeleteTodo} 
        selectedTab={selectedTab} 
        todos={todos} 
        />

        <TodoInput 
        handleAddTodo={handleAddTodo} 
        />

    </>
  )
}

export default App
