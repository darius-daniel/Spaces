import { useState } from 'react';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';

interface FolderProps {
  id: undefined | string;
  key: null | string;
  title: string;
  setCurrentFolder: React.Dispatch<React.SetStateAction<string>>;
}

export default function Folder({
  id = undefined,
  key = null,
  title,
  setCurrentFolder,
}: FolderProps) {
  const [open, setOpen] = useState<boolean>(false);

  function handleClick() {
    if (open) setOpen(false);
    else setOpen(true);
    setCurrentFolder(title);
  }

  return (
    <div
      className="flex flex-row ps-5 py-2 hover:bg-violet-500 hover:text-white"
      key={key ? key : ''}
      id={id ? id : ''}
      onClick={handleClick}
    >
      <p>{open ? <FaFolderOpen /> : <FaFolder />}</p>{' '}
      <p className="-mt-0.5 ms-2 me-0 text-md">{title}</p>
    </div>
  );
}
