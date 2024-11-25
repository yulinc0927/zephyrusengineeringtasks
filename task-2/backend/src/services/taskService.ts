import Task, { ITask } from "../models/Task";

export const getAllTasks = async (): Promise<ITask[]> => {
  return await Task.find();
};

export const createTask = async (taskData: ITask): Promise<ITask> => {
  const task = new Task(taskData);
  return await task.save();
};

export const updateTask = async (
  id: string,
  taskData: Partial<ITask>
): Promise<ITask | null> => {
  return await Task.findByIdAndUpdate(id, taskData, { new: true });
};

export const deleteTask = async (id: string): Promise<ITask | null> => {
  return await Task.findByIdAndDelete(id);
};
