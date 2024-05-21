import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { NotebookText } from 'lucide-react';

import Logo from './components/logo';
import axiosInstance from '~/utils/axios_instance';
import { Note } from '~/utils/interfaces';
import { Editor } from '@tiptap/react';

// import NoteCard from './components/note_card';
// import EditorPanel from './components/editor_panel';
// import Editor from './components/editor';

export default function User(props: { id: number }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote, setCurrentNote] = useState<Note>(notes[0]);
  const page = usePage();

  useEffect(() => {
    axiosInstance
      .get(`/notes/${props.id || page.url.split('/')[2]}`)
      .then((response) => setNotes(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div className="flex flex-row min-h-screen text-slate-600">
      <aside className="w-1/4 ps-2 text-start">
        <Logo className="flex flex-row max-h-full mt-0.5" />
        <p className="flex flex-row mt-10 mx-5 py-2 px-5 text-2xl text-white bg-purple-800 rounded-lg">
          {' '}
          <NotebookText size={24} className="mt-0.5 me-3" />
          Notes
        </p>
      </aside>
      <main className="max-h-full bg-purple-100 w-3/4">
        <Editor />
      </main>
    </div>
  );
}
