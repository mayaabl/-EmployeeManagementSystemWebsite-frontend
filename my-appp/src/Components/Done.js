import React from 'react';

function Done({tasks}) {
    const filteredTasks = tasks.filter(task => task.type === "Done");
    return (
        <div className="Done">
            <h3 className='Title-ToDo' style={{paddingLeft: '20px'}}>Done</h3>
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
            <p>No tasks Done! Bad job!</p> // Displayed if there are no tasks of type "ToDoList"
        )}
    </div>
    );
}

export default Done;