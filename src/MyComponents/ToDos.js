import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDos = (props) => {
  let mystyle={
    minHeight:"70vh"
  }
  return (
    <div className='container my-3' style={mystyle}>
        <h3 className='text-center my-3'>My To-Do List</h3>
        {props.todos.length===0?<h5>No To-Dos to display.</h5>:
        props.todos.map((todo)=>{
            return <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
})}
    </div>
  )
}


