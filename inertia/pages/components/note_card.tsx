interface NoteCardProps {
  note: {
    title: string;
    body: string;
    date: Date;
  };
}

export default function NoteCard({ note }: NoteCardProps) {
  const noteDate = `${note.date.getDate()}/${note.date.getMonth()}/${note.date.getFullYear()}`;
  return (
    <div className="bg-violet-200 text-slate-600 w-11/12 mt-5 mb-3 mx-auto py-4 px-4 rounded-md">
      <p className="mb-2 text-md">{note.title}</p>
      <div className="flex flex-row">
        <p className="text-sm">{noteDate}</p>
        <p className="text-sm ms-12">{note.body.slice(0, 28)}...</p>
      </div>
    </div>
  );
}
