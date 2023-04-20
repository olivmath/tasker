import express, { Request, Response } from "express";
import path from "path";
import {
  listTasks,
  createTask,
  getTask,
  doneTask,
  updateTask,
  deleteTask,
} from "./controllers/taskController";

const app = express();
const port = 3000;

app.use(express.json());

// Task routes
app.get("/tasks", listTasks);
app.get("/tasks/:id", getTask);
app.post("/tasks", createTask);
app.put("/tasks/:id", updateTask);
app.patch("/tasks/:id", doneTask);
app.delete("/tasks/:id", deleteTask);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
