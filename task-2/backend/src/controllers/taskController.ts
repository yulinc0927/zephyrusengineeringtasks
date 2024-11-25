import { Request, Response, NextFunction } from "express";

import * as taskService from "../services/taskService";
import AppError from "../utils/errorHandler";

export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    next(
      error instanceof AppError
        ? error
        : new AppError("Failed to fetch tasks", 500)
    );
  }
};

export const addTask = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    next(
      error instanceof AppError
        ? error
        : new AppError("Failed to create task", 400)
    );
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    console.log(req.params);
    const updatedTask = await taskService.updateTask(req.params.id, req.body);
    if (!updatedTask) {
      throw new AppError("Task not found", 404);
    }
    res.json(updatedTask);
  } catch (error) {
    next(
      error instanceof AppError
        ? error
        : new AppError("Failed to update task", 400)
    );
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const deletedTask = await taskService.deleteTask(req.params.id);
    if (!deletedTask) {
      throw new AppError("Task not found", 404);
    }
    res.status(204).send();
  } catch (error) {
    next(
      error instanceof AppError
        ? error
        : new AppError("Failed to delete task", 500)
    );
  }
};
