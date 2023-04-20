import Task, { generateId } from "../models/task";
import { Request, Response } from "express";
import adapter from "../database/adapter";

(async () => {
  await adapter.connect();
  await adapter.createTaskTable();
})();

export async function listTasks(_req: Request, res: Response) {
  const tasks = await adapter.findAllTasks();
  res.json(tasks);
}

export async function createTask(req: Request, res: Response) {
  const task: Task = {
    id: generateId(),
    name: req.body.name,
    done: false,
  };

  await adapter.insertTask(task);
  res.status(201).json(task);
}

export async function getTask(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const task = await adapter.findTaskById(id);

  if (!task) {
    return handleTaskNotFound(res);
  }

  res.json(task);
}

export async function doneTask(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const task = await adapter.findTaskById(id);

  if (!task) {
    return handleTaskNotFound(res);
  }

  task.done = true;
  await adapter.updateTask(task);
  res.json(task);
}

export async function updateTask(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const task = await adapter.findTaskById(id);

  if (!task) {
    return handleTaskNotFound(res);
  }

  task.name = req.body.name || task.name;
  task.done = req.body.done ?? task.done;
  await adapter.updateTask(task);
  res.json(task);
}

export async function deleteTask(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const task = await adapter.findTaskById(id);

  if (!task) {
    return handleTaskNotFound(res);
  }

  await adapter.deleteTask(id);
  res.status(204).end();
}

function handleTaskNotFound(res: Response): void {
  res.status(404).json({ message: "Task not found" });
}
