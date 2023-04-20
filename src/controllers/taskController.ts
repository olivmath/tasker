import { Request, Response } from "express";
import Task, { generateId } from "../models/task";

let tasks: Task[] = [];

function findTaskById(id: number): Task | undefined {
  return tasks.find((task) => task.id === id);
}

function handleTaskNotFound(res: Response): void {
  res.status(404).json({ message: "Task not found" });
}

export function listTasks(_req: Request, res: Response) {
  res.json(tasks);
}

export function createTask(req: Request, res: Response) {
  const task: Task = {
    id: generateId(),
    name: req.body.name,
    done: false,
  };

  tasks.push(task);
  res.status(201).json(task);
}

export function getTask(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const task = findTaskById(id);

  if (!task) {
    return handleTaskNotFound(res);
  }

  res.json(task);
}

export function doneTask(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const task = findTaskById(id);

  if (!task) {
    return handleTaskNotFound(res);
  }

  task.done = true;
  res.json(task);
}

export function updateTask(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const task = findTaskById(id);

  if (!task) {
    return handleTaskNotFound(res);
  }

  task.name = req.body.name || task.name;
  task.done = req.body.done ?? task.done;
  res.json(task);
}

export function deleteTask(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return handleTaskNotFound(res);
  }

  tasks.splice(taskIndex, 1);
  res.status(204).end();
}
