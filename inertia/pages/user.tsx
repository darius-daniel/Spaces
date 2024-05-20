import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';

import Logo from './components/logo';
import axiosInstance from '~/utils/axios_instance';
import { Folder, Note } from '~/utils/interfaces';

import { Plus } from 'lucide-react';
import Recents from './components/recents';
import NoteFolders from './components/note_folders';
import NoteCard from './components/note_card';
import EditorPanel from './components/editor_panel';
// import Editor from './components/editor';

export default function User(props: { id: number }) {
  const recentNotes = ['Reflection on the Month of June', 'Project proposal', 'Travel itinerary'];
  const [folders, setFolders] = useState<Folder[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentFolder, setCurrentFolder] = useState<Folder>();
  const [currentNote, setCurrentNote] = useState<Note>();
  const page = usePage();

  useEffect(() => {
    axiosInstance
      .get(`/folders/${props.id || page.url.split('/')[2]}`)
      .then((response) => setFolders(response.data))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    axiosInstance
      .get(`/notes/${props.id || page.url.split('/')[2]}/${currentFolder?.id}`)
      .then((response) => setNotes(response.data))
      .catch((error) => console.error(error.message));
  }, [currentFolder]);

  return (
    <div className="flex flex-row  bg-purple-200 text-slate-600">
      <div className="flex flex-row w-1/2">
        <div className="w-1/2 px-0" id="side">
          <Logo className="flex flex-row mt-0.5 ms-5" />
          <button className="flex flex-row bg-purple-500 hover:bg-purple-600 justify-center text-white font-bold w-5/6 py-1 mt-5 mx-auto rounded-md">
            <Plus className="me-1" size={21} />
            <span>New Note</span>
          </button>
          <Recents notes={recentNotes} />
          <NoteFolders
            folders={folders}
            currentFolder={{ attrs: currentFolder, setter: setCurrentFolder }}
          />
        </div>
        <div className="w-1/2 bg-purple-100" id="content">
          <h2 className="mt-3 ms-5 text-lg font-bold">{currentFolder?.name}</h2>
          {notes.map((note, idx) => (
            <NoteCard
              key={idx}
              note={note}
              currentNote={{ attrs: currentNote, setter: setCurrentNote }}
            />
          ))}
        </div>
      </div>
      {currentFolder && currentNote && (
        <div className="w-1/2 text-sm px-6 pt-10" id="editor">
          <EditorPanel
            currentNote={{ attrs: currentNote, setter: setCurrentNote }}
            currentFolder={{ attrs: currentFolder, setter: setCurrentFolder }}
          />
        </div>
      )}
    </div>
  );
}
