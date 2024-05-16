import { Note } from '~/utils/interfaces';

interface NoteCardProps {
  note: Note;
  currentNote: {
    attrs: Note | undefined;
    setter: React.Dispatch<React.SetStateAction<Note | undefined>>;
  };
  key: number;
}

export default function NoteCard({ note, currentNote, key }: NoteCardProps) {
  const layout = 'bg-purple-500 text-white w-11/12 mt-5 mb-3 mx-auto py-4 px-4 rounded-md ';
  const hover = ' hover:bg-purple-600';
  const highlight = ' bg-purple-600';

  return (
    <div
      key={key}
      className={currentNote.attrs?.id === note.id ? layout + hover + highlight : layout + hover}
      onClick={() => currentNote.setter(note)}
    >
      <h2 className="mb-2 text-md font-bold">{note.title}</h2>
      <div className="flex justify-center">
        <p className="text-sm">{note.createdAt.toLocaleString()}</p>
        <p className="text-sm ms-12">{note.body.slice(0, 20)}...</p>
      </div>
    </div>
  );
}
