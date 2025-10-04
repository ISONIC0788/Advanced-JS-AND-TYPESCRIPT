import React from 'react'
import Form from './Form'
import { useState } from 'react'
import{v4 as uuudv4 } from 'uuid'
import Todo from './Todo'
import Edit from './Edit'

uuudv4()
function Todolist() {


const [todovalue , setToDoValue] = useState([])
   
const  createTodo = todo =>{
  setToDoValue([...todovalue ,{id : uuudv4() , task: todo , isEditing: false}])
}

const deleteTodo = id =>{
    setToDoValue(todovalue.filter(todo => todo.id !== id ))
}

const editeTodo = id =>{
    setToDoValue(todovalue.map(todo => todo.id === id ? {...todo , isEditing:!todo.isEditing}: todo))
}

const editTask = (task , id ) =>{
    setToDoValue(todovalue.map(todo => todo.id === id ?{...todo , task , isEditing:!todo.isEditing}: todo))
}
  return (
    <div className='container bg-gray-700 mt-20 p-8 rounded-md'>
      <Form createTodo = {createTodo}/>
      {
        todovalue.map((todo , idx)=> (
            todo.isEditing ? (
                <Edit key={idx} editeTodo={editTask} task={todo}/>
            ):(<Todo task={todo} key={idx} deleteTodo={deleteTodo}/>)
        )) 
      }
    </div>
  )
}

export default Todolist
