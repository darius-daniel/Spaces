import { Note } from '~/utils/interfaces';

interface NoteCardProps {
  note: Note;
  currentNote:
    | {
        attrs: Note | undefined;
        setter: React.Dispatch<React.SetStateAction<Note>>;
      }
    | undefined;
}

export default function NoteCard({ note, currentNote }: NoteCardProps) {
  const normalBg = 'bg-purple-50';
  const highlight = 'bg-purple-200';
  const styling = ' shadow-xl text-sm w-1/3 p-5 pt-2 rounded-xl';

  const handleRightClick = (event: { preventDefault: Function }) => {
    event.preventDefault();
  };

  return (
    <li
      className={currentNote?.attrs?.id === note.id ? highlight + styling : normalBg + styling}
      onClick={() => currentNote?.setter(note)}
      onContextMenu={handleRightClick}
    >
      <h3 className="flex flex-row justify-between my-2 font-bold text-xl text-purple-800">
        {note.title ? note.title.slice(0, 30) : ''}
      </h3>
      <ul>
        {note.content.split('\n').map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    </li>
  );
}
