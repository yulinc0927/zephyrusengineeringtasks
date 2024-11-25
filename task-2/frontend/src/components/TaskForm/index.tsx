import React, { useEffect, useState } from "react";

import { Task } from "../../types";

interface TaskFormProps {
  onSubmit: (task: Omit<Task, "_id">) => void;
  initialData?: Omit<Task, "_id">;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialData }) => {
  const [task, setTask] = useState<Omit<Task, "_id">>({
    title: "",
    description: "",
    dueDate: "",
  });

  useEffect(() => {
    if (initialData) {
      setTask(initialData);
    }
  }, [initialData]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(task);
    setTask({ title: "", description: "", dueDate: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
        required
      />
      <textarea
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
      />
      <input
        type="date"
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
        required
      />
      <button
        type="submit"
        className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary-dark"
      >
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
