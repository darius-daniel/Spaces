import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import { NotepadText, Plus } from 'lucide-react';

import { Note } from '~/utils/interfaces';
import Logo from './components/logo';
import Editor from './components/editor';
import NoteCard from './components/note_card';
import { useFetch } from '~/utils/hooks';

export default function User(props: { id: number }) {
  const page = usePage();
  const [currentNote, setCurrentNote] = useState<Note>({
    userId: props.id || Number.parseInt(page.url.split('/')[2]),
    title: '',
    content: '',
  });
  const notes = useFetch<Note[]>(`${page.url}/notes`);

  const createNewNote = () =>
    setCurrentNote({
      userId: props.id || Number.parseInt(page.url.split('/')[2]),
      title: '',
      content: '',
    });

  return (
    <div className="flex flex-row min-h-screen text-slate-600">
      <aside className="w-1/4 ps-2 text-start">
        <Logo className="flex flex-row max-h-full mt-0.5" />
        <div className="float float-right mt-6 mb-3 me-5">
          <button
            className="bg-purple-400 hover:bg-purple-800 text-white px-4 py-2 rounded-xl"
            onClick={createNewNote}
          >
            <Plus />
          </button>
        </div>
        <p className="flex flex-row gap-3 mt-2 mx-5 py-2 px-5 text-2xl text-white bg-purple-800 rounded-lg clear-both">
          <NotepadText size={24} className="mt-0.5" />
          Notes
        </p>
      </aside>
      <main className="flex flex-col max-h-full min-h-full bg-purple-100 w-3/4 p-0">
        <Editor note={{ attrs: currentNote, setter: setCurrentNote }} />
        <div className="ps-4 my-4">
          {notes && (
            <>
              <h2 className="flex flex-row gap-3 my-6 text-2xl text-purple-800 font-bold">
                <NotepadText size={24} className="mt-0.5" />
                My Notes
              </h2>
              <p className="mt-3 mb-2 ms-4 text-purple-800 text-md">Recently viewed</p>
              <ul className="flex flex-row gap-4 mb-4">
                {notes.slice(0, 4).map((note, idx) => (
                  <NoteCard
                    note={note}
                    currentNote={{ attrs: currentNote, setter: setCurrentNote }}
                    key={idx}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
