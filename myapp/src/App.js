import './App.css';
import React, { useEffect, useState } from "react";

import Todos from './components/todos';

export default function App() {
  const [input, setInput] = useState('')
  const [checked, setChecked] = useState(false);
  const [completed, setCompleted]= useState('0')
  const[todos, setTodos]= useState ([

    {
      id: 1,
      todo: "Doing an assignment",
      status: "pending"
    },

    {
      id: 2,
      todo: "Drafting a proposal for funding ",
      status: "Done"
    },

    {
      id: 3,
      todo: "Going for an appointment at the embassy",
      status: "pending"
    },

    {
      id: 4,
      todo: "Doing a follow up on an application",
      status: "pending"
    }
  ])

  // const addCount = ()    =>{
  //   setCount(count + 1)
  // }

  const getCompleted = () =>{
    const done= todos.filter(todo => {
      return (todo.status === 'Done')
    })
    setCompleted(done.length)
  }

  useEffect(()=>{
    getCompleted()
    console.log(completed);
  },[todos, completed])




  const handleChange = () =>{
    setChecked(!checked);
  }

  const addTodo = () =>{
    const newTodo = {
      id: todos.length + 1,
      todo: input,
      status: "pending"
    }
    setTodos([...todos, newTodo])
    setInput('')
    // input(!setInput)
  }

  const deleteTodos = (id) =>{
    const remnant = todos.filter(todo => todo.id !== id)
    console.log(remnant);
    setTodos([...remnant])
   
  }

  const update = (id) =>{
   const mapped = todos.map(item=>{
      return item.id === id? {...item, status: item.status === "pending" ? "Done" : "pending"} : {...item}
    })
    setTodos([...mapped])
  
  }
  return (
    < >
    <div className='adding' >

      <h1> A todo Application </h1>
    <input 
    placeholder='Type your todo here' 
    type={"text"}
    value={input} 
    onChange={(e) => setInput(e.target.value)}>
    </input>

    <button  disabled= {!input} onClick = {addTodo}>Add todo</button>
    {todos.length > 0 &&(
      <p>{completed} {completed > 1 ? "tasks" : "task" } completed of {''} {todos.length}</p>
    )}
    

    </div>
    
      <Todos tasks={todos} deleteTodo={deleteTodos} update ={update} handleChange= {handleChange} />
    </>
  );
}

// export default App;
