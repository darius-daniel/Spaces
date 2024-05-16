import { PiNotepad } from 'react-icons/pi';

interface Props {
  notes: string[];
}

export default function Recents({ notes }: Props) {
  return (
    <div id="recents" className="mt-8">
      <h2 className="text-sm ps-7">Recents</h2>
      {notes.map((note, idx) => (
        <div
          className="flex flex-row mt-1 ps-7 py-1 text-md hover:text-slate-800 hover:bg-purple-300"
          key={idx}
        >
          <span className="mt-1 me-3">
            <PiNotepad />
          </span>
          <span>{note}</span>
        </div>
      ))}
    </div>
  );
}
