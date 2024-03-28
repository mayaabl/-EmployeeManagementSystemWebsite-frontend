import React from 'react';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';
import Ongoing from './Components/OnGoing'; // Import the Ongoing component
import Done from './Components/Done'; // Import the Done component
import './App.css'; // Ensure this file contains your layout styles

const tasks = [
    { id: 1, type: "ToDoList", Description: "Buy groceries" },
    { id: 2, type: "ToDoList", Description: "Read a book" },
    { id: 3, type: "Doing", Description: "Work on React project" },
    { id: 4, type: "Done", Description: "Morning workout" },
    { id: 5, type: "ToDoList", Description: "Call the bank" },
    { id: 6, type: "Done", Description: "Watch a movie" },
    { id: 7, type: "Doing", Description: "Learn TypeScript" },
    { id: 8, type: "ToDoList", Description: "Plan the weekend trip" },
    { id: 9, type: "ToDoList", Description: "Call the bank" },
    { id: 10, type: "ToDoList", Description: "Call the bank" },
    { id: 11, type: "ToDoList", Description: "Call the bank" },
    { id: 5, type: "ToDoList", Description: "Call the bank" },
  ];

function App() {
    return (
        <div className="background">
            <Navbar />
            <div className="task-container">
                <TodoList tasks={tasks} />
                <Ongoing tasks={tasks} />
                <Done  tasks={tasks}/>
            </div>
        </div>
    );
}

export default App;
