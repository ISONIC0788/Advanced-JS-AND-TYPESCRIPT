import React from 'react'
import { useState } from 'react'

function Form({createTodo}) {
   //allow to set value from input field to the state
   const [value , setValue] = useState('')
   const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(value)
    createTodo(value)
    setValue('')
   }

  return (
    <div>
      <form className='mb-4 font-primary w-full' onSubmit={handleSubmit}>
        <input type="text" name="" className='outline-none bg-transparent border border-gray-500 py-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300' id="" placeholder='what task do you have to day ? ' onChange={(e)=>setValue(e.target.value)} value={value}/>
        <button className='bg-gray-500 border-none p-2 text-white  cursor-pointer rounded ml-2 '>
            Add Task
        </button>
      </form>
    </div>
  )
}

export default Form
