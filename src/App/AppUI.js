import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from '../TodoList';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm'
import { MyLoader } from "../MyLoader";

function AppUI() {
    const { error, loading, serchedTodos, completeTodos, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext)
    return(
    <React.Fragment>
        <TodoCounter />
        <TodoSearch />
            <TodoList>
                {error && <p>Hubo un error</p>}
                {loading && <MyLoader/>}
                {(!loading && !serchedTodos.length) && <p>Crea tu primer TODO!</p>}
                
                {serchedTodos.map(todo => (
            <TodoItem input={todo.text} key={todo.text} completed={todo.completed} onComplete={() => completeTodos(todo.text)} onDelete={() => deleteTodo(todo.text)}/>
                ))}
            </TodoList>
                {!!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}
            

        <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>
  </React.Fragment>
    )
}

export { AppUI }
