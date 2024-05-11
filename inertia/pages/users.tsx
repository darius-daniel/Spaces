import { useState } from 'react';

import { FaCalendarDays, FaFolder, FaFolderPlus, FaPlus, FaRegStar } from 'react-icons/fa6';
import { PiNotepadFill } from 'react-icons/pi';

import NoteCard from './components/note_card';
import { BsArchive } from 'react-icons/bs';
import { FiTrash } from 'react-icons/fi';
import TextEditor from './components/text_editor';
import { useForm } from '@inertiajs/react';

export default function Users() {
  const [currentFolder, setCurrentFolder] = useState<string>('');
  const [highlightedItem, setHighlightedItem] = useState<{ id: string; key: null | number }>({
    id: '',
    key: null,
  });
  const { data, setData } = useForm({ folderName: '' });
  const [waiting, setWaiting] = useState<boolean>(false);

  const normalBg = 'flex flex-row ps-5 py-2 hover:bg-violet-500 hover:text-white';
  const highlightedBg = 'flex flex-row ps-5 py-2 bg-violet-50 hover:bg-violet-500 hover:text-white';

  const folders = ['Personal', 'Work', 'Travel', 'Events', 'Finances'];
  const recentItems = ['Reflection on the Month of the June', 'Project proposal', 'Travel itenary'];
  const moreItems = [
    { name: 'Favorites', icon: <FaRegStar /> },
    { name: 'Trash', icon: <FiTrash /> },
    { name: 'Archived Notes', icon: <BsArchive /> },
  ];

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
    folders.push(data.folderName);
    setWaiting(false);
  }

  return (
    <div className="flex flex-row text-slate-600">
      <div className="flex flex-row w-1/2">
        <div className="w-1/2 px-0 bg-violet-100" id="side">
          <button
            type="button"
            className="flex bg-violet-300 hover:bg-violet-500 text-white font-bold text-md mx-auto mt-1 mb-5 w-5/6 py-1 rounded-md"
          >
            <span className="mx-auto flex flex-row">
              <span className="mt-0.5">
                <FaPlus />
              </span>
              <span className="ms-2">New Note</span>
            </span>
          </button>

          {/* <Section name="recents" items={recentItems} setCurrentFolder={setCurrentFolder} /> */}
          <div className="pt-5" id="recents">
            <p className="text-sm my-0 py-1 ps-5">RECENTS</p>
            {recentItems.map((item, idx) => (
              <div className={'flex flex-row ps-5 py-2 ' + normalBg} key={idx + 1}>
                <p>
                  <PiNotepadFill />
                </p>{' '}
                <p className="-mt-1 ms-2 me-0 text-md">{item}</p>
              </div>
            ))}
          </div>

          {/* <Section name="folders" items={folders} setCurrentFolder={setCurrentFolder} /> */}
          <div className="pt-5" id="folders">
            <div className="flex justify-between">
              <p className="text-sm my-0 py-1 ps-5">FOLDERS</p>
              <span
                className="mt-1 me-10 p-2 hover:bg-violet-200 rounded-md"
                onClick={() => setWaiting(true)}
              >
                <FaFolderPlus />
              </span>
            </div>
            {folders.map((folder, idx) => (
              <div
                className={
                  folder === highlightedItem.id && idx === highlightedItem.key
                    ? highlightedBg
                    : normalBg
                }
                key={idx}
                onClick={() => {
                  setCurrentFolder(folder);
                  setHighlightedItem({ id: folder, key: idx });
                }}
              >
                <p>
                  <FaFolder />
                </p>{' '}
                <p className="-mt-0.5 ms-2 me-0 text-md">{folder}</p>
              </div>
            ))}
            {waiting && (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={data.folderName}
                  id="folderName"
                  placeholder="FOLDER NAME"
                  onChange={handleChange}
                  className="block rounded-md mx-5 w-5/6 px-5 py-1 mt-1 border-3 text-md hover:bg-violet-50"
                />
              </form>
            )}
          </div>

          {/* <Section name="more" items={[]} setCurrentFolder={setCurrentFolder} /> */}
          <div className="pt-5" id="more">
            <p className="text-sm my-0 py-1 ps-5">MORE</p>
            {moreItems.map((item, idx) => (
              <div
                className={
                  item.name === highlightedItem.id && idx === highlightedItem.key
                    ? highlightedBg
                    : normalBg
                }
                onClick={() => {
                  setCurrentFolder(item.name);
                  setHighlightedItem({ id: item.name, key: idx });
                }}
              >
                <p>{item.icon}</p> <p className="-mt-1 ms-2 me-0 text-md">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        {currentFolder && (
          <div className="w-1/2 bg-violet-50" id="content">
            <h1 className="px-4 pt-4">{currentFolder.toUpperCase()}</h1>
            <NoteCard
              note={{
                title: 'My Goals for the Next Year',
                body: 'As the year comes to a',
                date: new Date(),
              }}
            />
            <NoteCard
              note={{
                title: 'My Goals for the Next Year',
                body: 'As the year comes to a',
                date: new Date(),
              }}
            />
            <NoteCard
              note={{
                title: 'My Goals for the Next Year',
                body: 'As the year comes to a',
                date: new Date(),
              }}
            />
            <NoteCard
              note={{
                title: 'My Goals for the Next Year',
                body: 'As the year comes to a',
                date: new Date(),
              }}
            />
            <NoteCard
              note={{
                title: 'My Goals for the Next Year',
                body: 'As the year comes to a',
                date: new Date(),
              }}
            />
            <NoteCard
              note={{
                title: 'My Goals for the Next Year',
                body: 'As the year comes to a',
                date: new Date(),
              }}
            />
          </div>
        )}
      </div>
      <div className="w-1/2 text-sm px-6 bg-violet-100" id="editor">
        <h1 className="pt-5 py-3 text-2xl font-bold">Reflection on the Month of June</h1>
        <div className="flex flex-row">
          <span className="me-6 mt-0.5">
            <FaCalendarDays />
          </span>
          <span className="pe-28">Date</span>
          <span>22/06/2022</span>
        </div>
        <hr className="text-slate-600 mt-2 mb-4" />
        <div className="flex flex-row">
          <span className="me-6 mt-0.5">
            <FaFolder />
          </span>
          <span className="pe-28">Folder</span>
          <span>{currentFolder}</span>
        </div>
        <hr className="text-slate-600 bg-inherit mt-1 mb-2" />
        <TextEditor />
      </div>
    </div>
  );
}
