import { Note } from '~/utils/interfaces';
import NoteCard from './note_card';

interface Props {
  notes: Array<Note>;
  currentNote: {
    attrs: Note;
    setter: {
      note: React.Dispatch<React.SetStateAction<Note>>;
      showAll: React.Dispatch<React.SetStateAction<boolean>>;
    };
  };
}

export default function NoteGrid({ notes, currentNote }: Props) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      {notes.map((note, idx) => (
        <NoteCard
          note={note}
          currentNote={{
            attrs: currentNote.attrs,
            setter: { note: currentNote.setter.note, showAll: currentNote.setter.showAll },
          }}
          key={idx}
        />
      ))}
    </ul>
  );
}
