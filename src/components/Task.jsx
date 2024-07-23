import React from 'react';
import { MdCheckCircle, MdDelete } from 'react-icons/md';

const Task = ({ task, onComplete, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-2 mb-2 bg-white border border-gray-300 rounded shadow-sm">
      <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}>
        {task.text}
      </span>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onComplete(task.id)}
          className="text-green-500 hover:text-green-700"
          aria-label="Complete task"
        >
          <MdCheckCircle size={20} />
        </button>
        <button
          onClick={() => onRemove(task.id)}
          className="text-red-500 hover:text-red-700"
          aria-label="Remove task"
        >
          <MdDelete size={20} />
        </button>
      </div>
    </div>
  );
};

export default Task;
