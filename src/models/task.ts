import {v4 as uuid } from 'uuid'

export default interface Task {
  id: string;
  name: string;
  done: boolean;
}

export function generateId(): string {
  return uuid();
}
