import { DateTime } from 'luxon';

import { Note } from '~/utils/interfaces';

interface NoteCardProps {
  note: Note;
  currentNote:
    | {
        attrs: Note | undefined;
        setter: {
          note: React.Dispatch<React.SetStateAction<Note>>;
          showAll: React.Dispatch<React.SetStateAction<boolean>>;
        };
      }
    | undefined;
}

export default function NoteCard({ note, currentNote }: NoteCardProps) {
  const normalBg = 'bg-purple-50 hover:bg-purple-300 hover:text-slate-700';
  const highlight = 'bg-purple-200 hover:bg-purple-300 hover:text-slate-700';
  const styling = ' shadow-xl text-sm p-5 pt-2 rounded-xl';

  const handleRightClick = (event: { preventDefault: Function }) => {
    event.preventDefault();
  };

  return (
    <li
      className={currentNote?.attrs?.id === note.id ? highlight + styling : normalBg + styling}
      onClick={() => {
        currentNote?.setter.note(note);
        currentNote?.setter.showAll(false);
      }}
      onContextMenu={handleRightClick}
    >
      <h3 className="flex flex-row justify-between my-2 font-bold text-xl text-purple-800">
        {note.title ? note.title.slice(0, 30) : ''}
      </h3>
      <ul>
        {note.content
          .split('\n')
          .slice(0, 4)
          .map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
      </ul>
    </li>
  );
}
