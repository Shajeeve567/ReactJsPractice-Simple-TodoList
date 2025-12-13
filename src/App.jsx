import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

function App() {
  const todos = [
    {input: 'Brush your teeth twice a day', complete: true},
    {input: 'Follow your routine', complete: true},
    {input: 'Achieve your dreams', complete: false},
    {input: 'Bath everyday', complete: true},
  ]
  return (
    <>

        <Header todos={todos} />
        <Tabs todos={todos} />
        <TodoList todos={todos} />
        <TodoInput />

    </>
  )
}

export default App
