import mysql, { Connection, RowDataPacket } from "mysql2/promise";
import Task from "../models/task";

const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

let connection: Connection;

async function connect(): Promise<void> {
  connection = await mysql.createConnection(connectionConfig);
}

async function disconnect(): Promise<void> {
  await connection.end();
}

async function createTaskTable(): Promise<void> {
  const query = `
    CREATE TABLE IF NOT EXISTS tasks (
        id CHAR(36) NOT NULL,
        name VARCHAR(255) NOT NULL,
        done BOOLEAN NOT NULL,
        PRIMARY KEY (id)
    );
  `;

  await connection.query(query);
}

async function insertTask(task: Task): Promise<void> {
  const query = "INSERT INTO tasks (id, name, done) VALUES (?, ?, ?);";

  await connection.query(query, [task.id, task.name, task.done]);
}

async function findAllTasks(): Promise<Task[]> {
  const query = "SELECT * FROM tasks;";
  const [rows] = await connection.query<RowDataPacket[]>(query);

  let tasks: Task[] = rows.map((task) => {
    task.done = Boolean(task.done);
    return task as Task;
  });

  return tasks;
}

async function findTaskById(id: number): Promise<Task | undefined> {
  const query = "SELECT * FROM tasks WHERE id = ?;";
  const [rows] = await connection.query<RowDataPacket[]>(query, [id]);

  if (!rows.length) {
    return undefined;
  }

  const task = rows[0];
  task.done = Boolean(task.done);

  return task as Task;
}

async function updateTask(task: Task): Promise<void> {
  const query = "UPDATE tasks SET name = ?, done = ? WHERE id = ?;";

  await connection.query(query, [task.name, task.done, task.id]);
}

async function deleteTask(id: number): Promise<void> {
  const query = "DELETE FROM tasks WHERE id = ?;";

  await connection.query(query, [id]);
}

const adapter = {
  deleteTask,
  updateTask,
  findTaskById,
  findAllTasks,
  insertTask,
  createTaskTable,
  disconnect,
  connect,
};

export default adapter;
