import React from 'react';

function Ongoing({tasks}) {
    const filteredTasks = tasks.filter(task => task.type === "Doing");
    return (
        <div className="Doing">
            <h3 className='Title-ToDo' style={{paddingLeft: '20px'}}>Doing</h3>
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
            <p>No tasks On-Going! Good job!</p> // Displayed if there are no tasks of type "ToDoList"
        )}
    </div>
    );
}

export default Ongoing;