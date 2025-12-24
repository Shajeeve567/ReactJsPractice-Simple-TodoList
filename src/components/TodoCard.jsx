import { useState } from "react"

export function TodoCard(props) {
    const { handleSaveEdit, todo, handleEditTodo, handleDeleteTodo, todoIndex, handleCompleteTodo, editTab, setEditTab, insertInput} = props
    const [editInput, setEditInput] = useState(todo.input)

    return (
        <div className="card todo-item">
            
            {
                insertInput ? (
                    <input value={editInput} onChange={(e) => {setEditInput(e.target.value)}}></input>
                ) : <p>{todo.input}</p>
            }
            <div className="todo-buttons">
                <button onClick={() => {
                    handleCompleteTodo(todoIndex)
                }} disabled={todo.complete}>
                    <h6>Done</h6>
                </button>

                <button onClick={() => {
                    insertInput ? handleSaveEdit(todoIndex, editInput) : handleEditTodo(todoIndex)
                }}>
                    {
                        insertInput ? (<h6><i className="fa-solid fa-check"></i></h6>) 
                        : (<h6><i className="fa-solid fa-pen"></i></h6>)
                    }
                    
                </button>
                
                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}