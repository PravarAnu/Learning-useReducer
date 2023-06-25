
const ToDoReducer = (state, action) => {
    switch (action.type) {
        case "ADD": return { tasks: [...state.tasks, { id: Date.now(), task: action.payload, completed: false }], completed: [...state.completed] };
        case "COMPLETE":
            if (action.payload.completed) {

                const completed = state.completed.filter(task => task.id !== action.payload.id);

                const tasks = [...state.tasks, { id: action.payload.id, task: action.payload.task, completed: false }]

                return { tasks, completed }

            } else {

                const tasks = state.tasks.filter((task) => {
                    return task.id !== action.payload.id;
                });

                const completed = [...state.completed, { id: action.payload.id, task: action.payload.task, completed: true }]

                return { tasks, completed }
            }

        case "DELETE":
            const completed = state.completed.filter((task) => {
                return task.id !== action.payload;
            })

            console.log(completed)

            return { tasks: state.tasks, completed }

        default: return state;
    }
}

export default ToDoReducer;