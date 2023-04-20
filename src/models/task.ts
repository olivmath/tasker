export default interface Task {
  id: number;
  name: string;
  done: boolean;
}

export function generateId(): number {
  return new Date().getTime();
}
