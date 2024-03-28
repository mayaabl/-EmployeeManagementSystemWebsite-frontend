import React from 'react';

function TodoList({ tasks }) {
    // Filter tasks first to avoid filtering on each render
    const filteredTasks = tasks.filter(task => task.type === "ToDoList");

    return (
        
        <div className="todo-list">
            <h3 className='Title-ToDo' style={{paddingLeft: '20px'}}>To Do</h3>
            <div className='list'> 
            {filteredTasks.length > 0 ? (
                <ul>
                    {filteredTasks.map(task => (
                    <li key={task.id} className="task-card">
                    <p>{task.Description}</p>
                    <h4>{task.Description}</h4>
                    </li>
                    ))}
                </ul>
            ) : (
                <p>No tasks required! Good job!</p> // Displayed if there are no tasks of type "ToDoList"
            )}
             </div>
        </div>
    );
}
export default TodoList;