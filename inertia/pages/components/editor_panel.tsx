import { Folder, Note } from '~/utils/interfaces';

import { FaRegCalendarAlt, FaRegFolder } from 'react-icons/fa';

interface Props {
  currentNote: {
    attrs: Note | undefined;
    setter: React.Dispatch<React.SetStateAction<Note | undefined>>;
  };

  currentFolder: {
    attrs: Folder | undefined;
    setter: React.Dispatch<React.SetStateAction<Folder | undefined>>;
  };
}

export default function EditorPanel({ currentNote, currentFolder }: Props) {
  return (
    <div className="text-slate-600 text-md">
      <h2 className="text-3xl font-bold">{currentNote.attrs?.title}</h2>
      <div className="flex flex-row mt-5">
        <span className="mt-0.5 me-6">
          <FaRegCalendarAlt />
        </span>
        <span className="me-12">Date</span>
        <span className="font-bold underline">{currentNote.attrs?.createdAt.toLocaleString()}</span>
      </div>

      <hr className="me-6 my-2 border-1 border-slate-400" />

      <div className="flex flex-row">
        <span className="mt-0.5 me-6">
          <FaRegFolder />
        </span>
        <span className="me-10">Folder</span>
        <span className="font-bold underline">{currentFolder.attrs?.name}</span>
      </div>

      <hr className="me-6 my-2 border-1 border-slate-400" />
    </div>
  );
}
