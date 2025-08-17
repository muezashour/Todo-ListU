
import React, {useState} from "react";      


function ToDoList() {

    const [tastks, setTasks] = useState(["eat", "sleep", "code"]);
    const [newTask, setNewTask] = useState("");
    
    function handleInputChange(event) {
        setNewTask(event.target.value);
    
    }
    function AddTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
        setNewTask("");
        }
        

    }
    function deleteTask(index) { 
        const updatedTasks = tastks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index) {
        
        if (index > 0) {
            const updatedTasks = [...tastks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        } 
    }
    function moveTaskDown(index) {
        if (index < tastks.length - 1) {
            const updatedTasks = [...tastks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
    }

    return (<div className="ToDoList">
        <h1>To-Do-List</h1>
        <div className="input-container">
            <input type="text"
                placeholder="Enter A task "
                value={newTask}
                onChange={handleInputChange} />
            <button className="Add-button"
                onClick={AddTask}>Add Task
            </button>
        </div>
        <ol>
            {tastks.map((tastks, index) =>
                <li key={index}>
                    <span className="text">{tastks}</span>
                    <button className="delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button className="Move-Up"
                        onClick={() => moveTaskUp(index)}>
                        ⬆️
                    </button>
                    <button className="Move-Down"
                        onClick={() => moveTaskDown(index)}>
                        ⬇️
                    </button>
                </li>)}
        </ol>
    </div>        
    )
}
export default ToDoList;