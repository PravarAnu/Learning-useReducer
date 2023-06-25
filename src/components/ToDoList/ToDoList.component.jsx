import { useReducer, useState } from "react";
import ToDoReducer from "./ToDoList.reducer";
import "./ToDoList.style.scss";

const initialState = {
    tasks: [
        {
            id: 1,
            task: "First Task",
            completed: false
        },
        {
            id: 2,
            task: "Second Task",
            completed: false
        },
        {
            id: 3,
            task: "Third Task",
            completed: false
        }
    ],
    completed: [
        {
            id: 4,
            task: "Fourth Task",
            completed: true
        },
        {
            id: 5,
            task: "Fifth Task",
            completed: true
        }
    ]
};


const ToDoList = () => {
    const [state, dispatch] = useReducer(ToDoReducer, initialState);
    const [newTodo, setNewTodo] = useState('');

    const handleChange = (event) => {
        const val = event.target.value;
        setNewTodo(val);
    }

    const addNewTask = (event) => {
        event.preventDefault();

        if (newTodo.trim().length !== 0) {
            dispatch({ type: "ADD", payload: newTodo })
            setNewTodo("");
        }
    }

    const onCheck = (id, task, completed) => {
        dispatch({ type: "COMPLETE", payload: { id, task, completed } })
    }

    const onDelete = (id) => {
        dispatch({ type: "DELETE", payload: id });
    }

    return (
        <div className="todo-component">
            <form onSubmit={addNewTask}>
                <input id="add-task-input" type="text" value={newTodo} placeholder="Add Your Task" onChange={handleChange} />
                <button id="add-task-submit" type="submit">Add Task</button>
            </form>


            <div className="all-tasks">
                <div className="uncompleted-tasks">
                    <h2>Tasks :</h2>
                    {
                        state.tasks.map(task => {
                            return (
                                <div key={task.id} id="tasks">
                                    <input type="checkbox" checked={task.completed} onChange={() => onCheck(task.id, task.task, task.completed)} />
                                    <span className="task" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                                        {task.task}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="horizontal-line"></div>
                <div className="completed-tasks">
                    <h2>Completed :</h2>
                    {
                        state.completed.map(task => {
                            return (
                                <div key={task.id} id="tasks">
                                    <input type="checkbox" checked={task.completed} onChange={() => onCheck(task.id, task.task, task.completed)} />
                                    <span className="task" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                                        {task.task}
                                    </span>
                                    <span className="task-delete" onClick={() => onDelete(task.id)}>X</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}


export default ToDoList