
import React from "react";

const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [editid, setEditId]=React.useState(null);
  const [edittext, setEditText]=React.useState("");
  const [flag, setFlag]=React.useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    if( newTodo.text)
    {
    setTodos([...todos].concat(newTodo));
    setTodo("");
    }
  }


  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function editHandleSubmit(e)
  {
    e.preventDefault();
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === editid) {
        if(edittext)
        {
        todo.text = edittext;
        }
      }
      return todo;
    });
     setTodos(updatedTodos);
     setEditId(null);
     setEditText("");
     setFlag(true);
  }



    return(

        <>
        
        <div class="h-auto flex justify-center w-full ">
            <div class="flex flex-col justify-center items-center  md:w-1/4 space-y-4  mt-10 ">
            {flag ? (
              <>
              <form class=" w-full space-y-4 " onSubmit={handleSubmit}>
              <input type="text"  value={todo} placeholder="Add a Todo" class="text-center w-full border-2 focus:outline-none rounded p-2  bg-gray-0" onChange={(e) => setTodo(e.target.value)}  />
                <button type='submit' class="focus:outline-none  bg-gray-800 hover:bg-gray-700 text-white font-bold  w-auto flex mx-auto   py-2 px-4 rounded" >Add Item</button>
              </form> 
                
              

              </>
                
            ) : (
              <>
                <form class="space-y-4 w-full " onSubmit={editHandleSubmit}>
                <input type="text"  value={edittext} placeholder="Edit a Todo" class="text-center  border-2 focus:outline-none rounded p-2 w-full bg-gray-0" onChange={(e) => setEditText(e.target.value)} />
                <button type='submit' class="focus:outline-none  bg-gray-800 hover:bg-gray-700 text-white font-bold  w-auto flex mx-auto   py-2 px-4 rounded" >Edit Item</button>

                </form>
                



              </>
                
            )}

            </div>
            
        </div>

        <div  class="mt-4 md:mt-2 w-full flex justify-center ">
        <div class="md:mt-4 w-8/9 md:w-3/6  lg:w-2/6  flex flex-col justify-center ">
            {todos.map((todo)=>
          <div class=" flex flex-col justify-center border-2 mt-4 bg-gray-50 border-gray-200 p-3 rounded-md" key={todo.id}>
          <div class="flex justify-between pl-4 h-auto" >
          

              <p class="h-auto w-64   lg:w-5/6 px-1  text-justify overflow-ellipsis break-words"> { todo.text } </p>
              <div>
              <input

            type="checkbox"
            id="completed"
            class="h-5 w-5"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
               />
              </div>
          
            </div> 
            <div class="flex justify-between mt-4">
          <button onClick={() => {
            setEditId(todo.id);
            setFlag(false);
            }} class="flex-no-shrink md:p-3 ml-2   font-bold text-gray-800  bg-green-400 rounded hover:bg-green-300 px-6 md:w-1/4">Edit</button>
          <button onClick={() => deleteTodo(todo.id)} class="flex-no-shrink p-3 px-4 ml-2   font-bold text-gray-800  bg-red-400 rounded hover:bg-red-300  md:w-auto">Remove</button>
          {todo.completed ? (
              <div class="flex items-center " >  <img src="https://img.icons8.com/fluent/30/000000/checked-2.png"/>
              </div>
                ) : ( 
            <div class="flex items-center ">
                 <div class="p-2 font-semibold text-base"></div>  <img src="https://img.icons8.com/emoji/25/000000/cross-mark-emoji.png"/>

              </div>
              )} 
            </div>
      
               







      </div>
  )}
        </div>
     

        </div>
          

      
                        
        
        </>
    )


}
    

export default Todo;

