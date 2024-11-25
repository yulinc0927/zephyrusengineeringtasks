import React, { useEffect, useState } from "react";

import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";

import * as taskService from "../../apis/taskService";
import { Task } from "../../types";

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await taskService.getTasks();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleAddOrUpdateTask = async (task: Omit<Task, "_id">) => {
    try {
      if (currentTask) {
        const updatedTask = await taskService.updateTask(currentTask._id, task);
        setTasks((prevTasks) =>
          prevTasks.map((t) => (t._id === updatedTask._id ? updatedTask : t))
        );
      } else {
        const newTask = await taskService.createTask(task);
        setTasks((prevTasks) => [...prevTasks, newTask]);
      }
      setCurrentTask(null);
    } catch (error) {
      console.error("Error adding/updating task:", error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await taskService.deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((t) => t._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Task Manager</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-card shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-bold text-primary mb-4">
              {currentTask ? "Edit Task" : "Add Task"}
            </h2>
            <TaskForm
              onSubmit={handleAddOrUpdateTask}
              initialData={currentTask || undefined}
            />
          </div>
          <div className="lg:col-span-2">
            <TaskList
              tasks={tasks}
              onEdit={setCurrentTask}
              onDelete={handleDeleteTask}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TaskPage;
