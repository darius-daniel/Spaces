import React from 'react';
import { FaRegFolder } from 'react-icons/fa';
import { Folder } from '~/utils/interfaces';

interface Props {
  folders: Array<Folder>;
  currentFolder: {
    attrs: Folder | undefined;
    setter: React.Dispatch<React.SetStateAction<Folder | undefined>>;
  };
}

export default function NoteFolders({ folders, currentFolder }: Props) {
  const layout = ' flex flex-row mt-1 ps-7 py-1 text-md ';
  const hover = ' hover:text-slate-800 hover:bg-purple-300';
  const highlight = ' bg-purple-50';

  return (
    <div id="folders" className="mt-8">
      <h2 className="text-sm ps-7">Folders</h2>
      {folders.map((folder, idx) => (
        <div
          className={
            currentFolder.attrs?.name !== folder.name ? layout + hover : layout + highlight + hover
          }
          key={idx}
          onClick={() => {
            currentFolder.attrs?.name !== folder.name && currentFolder.setter(folder);
          }}
        >
          <span className="mt-0.5 me-3">
            <FaRegFolder />
          </span>
          <span>{folder.name}</span>{' '}
        </div>
      ))}
    </div>
  );
}
