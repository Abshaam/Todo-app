import './todo.css';
export default function Todo ({task, del, update, handleChange}){
    return(
        
        <div
        style={
            task.status === "pending" ? {backgroundColor: 'white'} : {backgroundColor: "rgb(233, 215, 167)"}
        }
         className="wrapper"
        > 

            <p>{task.todo}</p>


        <div className='button'>

        {/* <label htmlFor="check">
                Done?
                <input type="checkbox"
                // value={checked}
                onChange= {handleChange} /> 
       </label> */}

            {<button className='status-button'  
         onClick={() => update(task.id)}>{task.status} </button> } 

           
            <button className='delete-button' onClick={() => del(task.id)}>Delete</button> 
        </div>
            
        </div>
    )
}