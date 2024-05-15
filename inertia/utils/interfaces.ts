import React from 'react';

export interface FolderProps {
  folders: Array<Folders>;
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

export interface Folders {
  name: string;
  id: number;
  userId: number;
}
