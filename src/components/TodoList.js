import React from "react";
import Todo from "./Todo"

function TodoList({tudos}){
 return(
     <ul>
         {
            tudos.map (todo => (
            <Todo key ={todo.id}  todo={todo} />
            )
                )
         }
     </ul>
 );
}

export default TodoList;
