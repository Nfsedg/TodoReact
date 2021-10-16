import React from "react";
import "./TodoItem.css";
import { VscCheck } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";

function TodoItem(props) {

    return(
        <li className="todo-list">
            <span 
                onClick={props.onComplete}
            >
            <VscCheck className={`todo-list__check ${props.completed && 'todo-list__checked--active'}`} />
            </span>

            <p className={`todo-list__text ${props.completed && 'todo-list__text--active'}`}>{props.input}</p>

            <span 
                onClick={props.onDelete}
            >
            <VscChromeClose
                className="todo-list__delete" 
            />
            </span>
        </li>
    )
}

export { TodoItem }