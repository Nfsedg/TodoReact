import React from "react";
import { TodoContext } from "../TodoContext";
import "./todoform.css";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    function onChange (event) {
        setNewTodoValue(event.target.value)
    };

    function onCancel () {
        setOpenModal(false)
    };
    function onSubmit (event) {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Añadir nuevo Todo</label>
            <textarea 
                placeholder="Escribe un nuevo Todo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="modal-buttons">
                <button
                    type="submit"
                >Añadir</button>
                <button
                    type="button"
                    onClick={onCancel}
                >Cancelar</button>
            </div>
        </form>
    )
}

export { TodoForm }