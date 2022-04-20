import React, { useState } from "react";
import "./todo.scss";
import {useAuth0} from '@auth0/auth0-react'
import JSONPretty from "react-json-pretty";

import { useAddTodo, useTododata, useUpdateTodo,  useDeleateTodo} from "./hooks/useTodo";
import { HiCheck,HiTrash } from "react-icons/hi";


const Todo = () => {
  const { logout } = useAuth0()
  const { user , isAuthenticated} = useAuth0();
  const [work, setWork] = useState("");
  const [iscomplete, setCompleted] = useState(false);
 

  const onSuccess = (data) => {
    console.log("perform side eFfect after data ", data);
  };

  const onErorr = (error) => {
    // console.log("perform side effect on error", error);
  };

  const handleChnageadd = () => {
    // console.log({ work });
    const todoo = { iscomplete, work };
    addTodo(todoo);
  };

  const update = (id) => {
    // console.log({iscomplete})
    const todo = { iscomplete: true , work}; 
    // console.log(4343)
    updateTodo({ id,  ...todo });

  };

 
  const { mutate: updateTodo } = useUpdateTodo();

  const Delete = (id ) =>{

    DeleateTodo(id)   
  };
  const {mutate :  DeleateTodo} = useDeleateTodo();

  const { isLoading, data, isError, error, isFetching } = useTododata(
    onErorr,
    onSuccess
  );
  // console.log({ isFetching, isLoading });

  const { mutate: addTodo } = useAddTodo();

  if (isLoading || isFetching) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }



  // console.log(data);
  
  return (
    isAuthenticated &&(
    <div className="container">
      <h1>Todo</h1>
      {/* <h1>{JSON.stringify(user?.name,null,2)}</h1> */}
      <div><img src={user?.picture} alt={user?.name}/>
     
      </div>
      {/* <h1>{user?.name}</h1> */}
    
      <JSONPretty data={user?.name}/><br/>
      <p>more info:{user?.email}</p>
      <button onClick={()=>logout()} className="todo-button" >
          logout
        </button>
      <div>
        <br />
        <input
          className="input"
          type="text"
          value={work}
          onChange={(e) => setWork(e.target.value)}
          placeholder="enter your today work"
        />
        <br />
        <button onClick={handleChnageadd} className="todo-button" >
          Add todo
        </button>
      </div>

      {data.map((todo) => {
        return (
          <div key={todo.id} className="list">
            <div className="inner">
              {todo.work} 
              <HiTrash onClick={() => Delete(todo.id)} className="btn1"/>
              <HiCheck onClick={() => update(todo.id)} className="btn"/>
              <br />
            </div>
          </div>
        );
      })}
    </div>
    )
  );
};
export default Todo;
