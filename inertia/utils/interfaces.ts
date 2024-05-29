import { DateTime } from 'luxon';

export interface Note {
  id?: number;
  userId: number;
  title: string;
  content: string;
  createdAt?: DateTime;
  updatedAt?: DateTime;
}

export interface User {
  id: number;
  email: string;
  notes: Array<Note>;
  username: string;
  firstName: string;
  lastName: string;
  password?: string;
}

export interface LogoProps {
  className: string;
}
