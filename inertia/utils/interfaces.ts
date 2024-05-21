import { DateTime } from 'luxon';

export interface Note {
  id?: number;
  userId: number;
  folderId: number;
  title: string;
  body: string;
  createdAt?: DateTime;
  updatedAt?: DateTime;
}

export interface LogoProps {
  className: string;
}
