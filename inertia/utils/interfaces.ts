import React from 'react';
import { DateTime } from 'luxon';

export interface FolderProps {
  folders: Array<Folder>;
  userId: number;
  currentFolder: {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
  };
  selected: {
    element: {
      id: string;
      key: null | number;
    };
    setElement: React.Dispatch<React.SetStateAction<{ id: string; key: null | number }>>;
  };
}

export interface Folder {
  id: number;
  userId: number;
  name: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface Note {
  id?: number;
  userId: number;
  folderId: number;
  title: string;
  body: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface LogoProps {
  className: string;
}
