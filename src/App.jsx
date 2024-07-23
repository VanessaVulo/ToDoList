import React, { useState } from 'react';
import Notepad from './components/Notepad';
import Button from './components/Button';
import TextInput from './components/TextInput';
import Task from './components/Task';
import { getCurrentDay } from './components/getCurrentDate'


function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddClick = () => {
    if (inputValue.trim() === '') return;
    const newTask = {
      id: Date.now(), // Unique ID based on timestamp
      text: inputValue,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleRemove = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Notepad>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-extrabold mb-4">{getCurrentDay()}</p>
          <div className="flex items-center mb-6">
            <p className="font-handwriting text-2xl font-bold mr-4">My tasks for the day</p>
            <Button onClick={handleAddClick}>
              Add
            </Button>
          </div>
          <TextInput
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter task..."
          />
          <div className="mt-4 w-full">
            {tasks.map(task => (
              <Task
                key={task.id}
                task={task}
                onComplete={handleComplete}
                onRemove={handleRemove}
              />
            ))}
          </div>
        </div>
      </Notepad>
    </div>
  );
}

export default App;