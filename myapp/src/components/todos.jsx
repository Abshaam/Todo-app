import Todo from "./todo"
import "./todo.css"

export default function Todos ({tasks, deleteTodo, update, handleChange,}){
    console.log(tasks)
    return(
        <>
        {
            tasks.length ? (
            tasks.map (todos =>(
                <Todo task ={todos} key={todos.id} del={deleteTodo} update={update} handleChange={handleChange}/>
            ))
            ) :
                <div className="none">No todos to show at the moment</div>
              }
            


        
        
        </>
           
    )
}