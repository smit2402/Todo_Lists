import React from 'react'
import { Todoitem } from "./Todoitem";
export const Todos = (props) => {
   let todosstyle={
        minHeight:"70vh",
        margin: "40px auto",
    }
    return (
        <div className="container" style={todosstyle}>
            <h3 className=" my-3">todos list</h3>
            {props.todos.length ===0 ? "No todos to Display" :

                props.todos.map((todo) => {
                    return (<Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
                }
                )
            }


        </div>
    )
}
