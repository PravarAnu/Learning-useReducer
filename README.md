# Understanding `useReducer` Hook in REACT

I made this repository to understand the useReducer hook by creating a simple To Do App which has

- Add task
- Mark as completed
- Delete the completed tasks
- Two separate sections for completed and not completed tasks
- Unmark the task that by mistakenly marked as completed.

## Some prerequisite 😎

- Able to setup environment for react by own or by using `npx create-react-app` or `yarn create react-app`
- Knowledge of how to create `components` and how to use them
- Have basic knowledge of `useState` Hook
- Knowledge of how to use `HOFs` such as `.map`, `.filter`, `.reduce`

## What is `useReducer` Hook ??

`userReducer` Hook is used for state management. It is actaully the big brother of `useState` which manages complex state in a more structured way.

## Differences between `useState` and `useReducer`

### `useState`

- useState is a simpler and more straightforward hook to manage local state in a component.
- It returns a pair: the current state value and a function to update that value.
- useState is typically used when you have a single value or a small set of related values to manage.
- It is suitable for managing simple state changes or when the state transitions are not complex.

### `useReducer`

- useReducer is more powerful and suitable for managing complex state logic and state transitions.
- It follows the Redux pattern, where state updates are handled by a reducer function.
- It returns the current state value and a dispatch function to send actions to the reducer.
- useReducer is useful when the state changes depend on multiple factors or involve complex logic.

---

## Enough theory 😡. Let's start by doing stuffs

---
### I have also created a basic design file for your reference that how our project is going to look like
[Figma Link](https://www.figma.com/file/4WuRBbXl6R50hwBOQmVetI/To-Do-Using-Reducer-Hook?type=design&node-id=0%3A1&mode=design&t=bzHem8evky0GkBFv-1)
### You can make changes in this design by making a duplicate of them
### In this tutorial I am not gonna do css so please try to add the style on your own by taking the reference from the above `Figma` file

## I am hoping that your folder structre looks like this after creating a react app:

```shell
|-node_modules

|-public
|   |-index.html

|-src
|   |-components
|   |-app.js
|   |-index.js

|-.gitignore
|-package.lock.json
|-package.json
```



### Now follow these steps
1. Create a folder inside component named `ToDOList`
2. Create a file named `ToDoList.component.jsx` inside this newly created folder.
3. Now your folder structure will look like this :

    ```shell
    |-node_modules

    |-public
    |   |-index.html

    |-src
    |   |-components
    |   |   |-ToDoList
    |   |   |   |-ToDoList.component.jsx
    |   |-app.js
    |   |-index.js

    |-.gitignore
    |-package.lock.json
    |-package.json
    ```

4. Open the `ToDoList.component.jsx` in the editor.
5. Now create a ToDoList components and copy paste the data given below for the tasks.

    ```javascript
    const tasks = [
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
    ]
    ```

6. Now your file will look like this

    **ToDoList.component.jsx**

    ```javascript
    const tasks = [
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
    ]


    const ToDoList = ()=>{}

    export default ToDoList;
    ```

7. We have some data for tasks and we also defined a component named `ToDoList`. Now by using the data above try to render the task in the ToDoList component.

8. If you have done it yourself than VERY GOOD 😊😊.
If not no worries take a look at the code below

    **ToDoList.component.jsx**

    ```javascript
    const ToDoList = () =>{
        return (
            <h2>Tasks :</h2>
            {
                tasks.map(task => {
                    return (
                        <div key={task.id}>
                            <input type="checkbox"/>
                            <span>
                                {task.task}
                            </span>
                        </div>
                    )
                })
            }
        )
    }
    ```

9. Start the react server and you can see that all the tasks are shown on the page.

    ## Tasks :
    - [ ] First Task
    - [ ] Second Task
    - [ ] Third Task


    ## Now the time arrived for start using `useReducer`
    There are some terms used in the `useReducer` that most of the time looks very scary because of their names.
    Let's understand those first - 
    - state - this is the current state
    - action - this helps us in understanding what type of action is going to be perform on the current state
    - initialState - this is used as initializing the `useReducer` hook with a state
    - payload - these are the neccesary data which are send along with the action type
    - dispatch - this is used to tell the Reducer the action type and payload data

10. Firstly, we have to create a `initialState` which we have already done but we gave a different name. So, change the name
    ```javascript
    const initialState = [  //Change the name from tasks to initialState
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
    ]
    ```

11. Now create a varaible named `ToDoReducer` and initialize it with an arrow function with parameters `state` and `action`
    ```javascript
    const ToDoReducer = (state, action) => {}
    ```

12. By default if there is no action to perform on the state then we return the state back by default
    ```javascript
    const ToDoReducer = (state, action) => {return state}
    ```

13. Our `reducer` function is ready.
14. By using the `reducer` function and the `initialState` we can use `useReducer` hook.
15. First import the `useReducer` hook from `react`
    ```javascript
    import {useReducer} from 'react'
    ```

16. `useReducer` hook takes two arguments `reducer` function and `initialState` and gives use two things to use `state` and `dispatch`.

17. Now let's use it in our `ToDoList` component
    ```javascript
    const initialState = [...]
    const ToDoReducer = (state, action) => {...}

    const ToDoList = () =>{
        //new line of code
        const [state, dispatch] = useReducer(ToDoReducer, initialState)

        return (...)
    }
    ```

18. Now we have to define some actions inside the reducer function such as ADD_TASk, MARK_AS_COMPLETED.

19. Inside the reducer function we can define infinite number of actions but we have to also define infinite number of if-else condition to check for which type of action we have to perform on the current state. So we are using the switch-case here.
    ```javascript
    const initialState = [...]

    const ToDoReducer = (state, action) => {
        switch(action.type){
            case 'ADD_TASK':

            case 'MARK_AS_COMPLETE':

            default : return state
        }
    }

    const ToDoList = () =>{...}
    ```

20. The `action` parameter is actually an object which mainly contain two types of key-value pair i.e `type` and `payload`
    - `type` is used to define which type of action this is
    - `payload` is used to give essential data which helps in performing the action such as id, name, etc.

21. Now inside the `ToDoList` component we have to create a form which helps us in adding that task into the initialState (i.e tasks earlier).
    ```javascript
    const ToDoList = () =>{
        // start of new codes
        const [newTask, setNewTask] = useState('');

        return (
            <form>
                <input value={newTask} onChange={()=>{setNewTask(newTask)}}/>
                <button type="submit">Add Task</button>
            </form>

        //end of new codes
            <h2>Tasks :</h2>
            {...}
        )
    }
    ```
22. In above we created an input field which uses the `useState` hook to manage the state of newTask.
23. Now we have to handle the submit functionality.
    ```javascript
    const ToDoList = () =>{
        ....
        const handleSubmit = (event)=>{
            event.preventDefault();

        }
        return (
            <form onSubmit={handleSubmit}>

            ....
        )
    }
    ```

24. Now we are going to use `dispatch` here
    ```javascript
    const ToDoList = () =>{
        ....
        const handleSubmit = (event)=>{
            event.preventDefault();

            dispatch({type: "ADD_TASK", payload: newTask}); //new line of code

        }
        return (
            <form onSubmit={handleSubmit}>
            ....
        )
    }
    ```

25. You can see that inside the dispatch we sent an object which has two keys named `type` and `payload`. These are actually action which we are gona use inside the `reducer` function.

26. Now complete the `ADD_TASK` functionality in the `reducer` function.
    ```javascript
    const initialState = [...]

    const ToDoReducer = (state, action) => {
        switch(action.type){
            case 'ADD_TASK': 
            //start of new code
            
                const newlyCreatedTask = {
                    id: Date.now(),
                    task: action.payload.newTask,
                    completed: false
                };

                return [...state, newlyCreatedTask];
            
            //end of new code

            case 'MARK_AS_COMPLETE':

            default : return state
        }
    }

    const ToDoList = () =>{...}
    ```

27. Now if you try to add new task. It will work as expected. Give it a try✈️.
28. We are done with adding a new task to our initialState (i.e tasks) array.
29. Now there is a functionality `MARK_AS_COMPLETED` left. Here we have to just set the completed as true for a given task id.
30. Let's create a function for the checkbox to toggle check.
    ```javascript
    const ToDoList = () =>{
    // start of new codes
    const [newTask, setNewTask] = useState('');

    function toggleComplete(id){
        dispatch({type: "MARK_AS_COMPLETE", payload: id});
    }

        return (
            <form>...</form>

            <h2>Tasks :</h2>
        {
            tasks.map(task => {
                return (
                    <div key={task.id}>
                        <input type="checkbox" onChange={()=>{toggleComplete(task.id)}}/>
                        <span>
                            {task.task}
                        </span>
                    </div>
                )
            })
        }
        )
    }
    ```
31. Now complete the reducer function for `MARK_AS_COMPLETE`
    ```javascript
    const initialState = [...]

    const ToDoReducer = (state, action) => {
        switch(action.type){
            case 'ADD_TASK': ...

            case 'MARK_AS_COMPLETE':
                const newTasksList = state.map(task => {
                    if(task.id === action.payload){
                        return {id: task.id, task: task.task, completed: !task.completed}
                    }

                    return task;
                })
                return [...newTasksList];

            default : return state
        }
    }

    const ToDoList = () =>{...}
    ```

32. If you check the tasks array after checking a checkbox of a task you will find that the completed value will toggle to true or false.
33. But we want that if a task is completed then that task will be shown in ~~strike through~~ style. Like below
    ## Tasks :
    - [x] ~~First Task~~
    - [x] ~~Second Task~~
    - [ ] Third Task

34. To achieve this we have to add little inline css in the span where task is rendered.
    ```javascript
    const ToDoList = () =>{
    const [newTask, setNewTask] = useState('');

    function toggleComplete(id){
        dispatch({type: "MARK_AS_COMPLETE", payload: id});
    }

        return (
            <form>...</form>

            <h2>Tasks :</h2>
            {
                tasks.map(task => {
                    return (
                        <div key={task.id}>
                            ...

                            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                                {task.task}
                            </span>

                        </div>
                    )
                })
            }
        )
    }
    ```
35. Now start the react server and try to tick a task. You can see that the task is crossed and if you untick a task then it will not be in crossed.

### That's All about basic understanding of useReducer Hook. There are some more functionality made in the actual project which are as follows:
- Seperate section for uncompleted tasks and completed tasks.
- In completed tasks there is a button associataed with task which is used to delete the completed task.

### You can give it a try to implement these above functionality on your own ✈️.
### If you stuck 😒 anywhere take a look at my code and you also get to know some more things such as -
- You can also send object in the payload that helps us in sending many data at a time.
- We added all the code in a single file but that's not a clean code. You can see that I tried to write clean code in the project folder.



---
## If you are not able to understand anything then feel free to reach me:
- 📞 +91 7368098223
- 📧 pravaranu6@gmail.com
---


# HAPPY LEARNING 😊.