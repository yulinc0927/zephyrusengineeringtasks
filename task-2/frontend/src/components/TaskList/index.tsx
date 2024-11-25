import React from "react";

import { Task } from "../../types";

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="bg-card p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-bold text-primary">{task.title}</h3>
          <p className="text-gray-600">
            {task.description || "No description"}
          </p>
          <p className="text-sm text-gray-500 mt-2">Due Date: {task.dueDate}</p>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => onEdit(task)}
              className="bg-accent text-white py-1 px-4 rounded-lg hover:bg-accent-dark"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task._id)}
              className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
