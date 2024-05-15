import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { FaFolder, FaFolderPlus } from 'react-icons/fa';
import { FolderProps } from '~/utils/interfaces';

export default function Folders({ folders, userId, currentFolder, selected }: FolderProps) {
  // const [open, setOpen] = useState<boolean>(false);
  const [waiting, setWaiting] = useState<boolean>(false);
  const { data, setData, post } = useForm({ name: '', userId });

  const normalBg = 'flex flex-row ps-5 py-2 hover:bg-violet-500 hover:text-white';
  // const highlightedBg = 'flex flex-row ps-5 py-2 bg-violet-50 hover:bg-violet-500 hover:text-white';

  // function handleClick() {}

  function handleChange(e: { target: { id: any; value: any } }) {
    const key = e.target.id;
    const value = e.target.value;

    setData((formData: any) => ({
      ...formData,
      [key]: value,
    }));
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    post(`/folders`);
    setWaiting(false);
  }

  return (
    <div className="pt-5" id="folders">
      <div className="flex justify-between">
        <p className="text-sm my-0 py-1 ps-5">FOLDERS</p>
        <span
          className="-mt-0.5 me-10 p-2 hover:bg-violet-200 rounded-md"
          onClick={() => setWaiting(true)}
        >
          <FaFolderPlus />
        </span>
      </div>
      {folders.map((folder, idx) => (
        <div
          className={normalBg}
          key={idx}
          onClick={() => {
            currentFolder.setName(folder.name);
            selected.setElement({ id: folder.name, key: idx });
          }}
        >
          <p>
            <FaFolder />
          </p>{' '}
          <p className="-mt-0.5 ms-2 me-0 text-md">{folder.name}</p>
        </div>
      ))}
      {waiting && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={data.name}
            id="name"
            placeholder="FOLDER NAME"
            onChange={handleChange}
            className="block rounded-md mx-5 w-5/6 px-5 py-1 mt-1 border-3 text-md hover:bg-violet-50"
          />
        </form>
      )}
    </div>
  );
}
