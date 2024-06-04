import { useState } from 'react';
import { router, useForm, usePage } from '@inertiajs/react';
import { ArrowRightCircle, NotepadText, Plus } from 'lucide-react';

import Logo from './components/logo';
import Editor from './components/editor';
import { useFetch } from '~/utils/hooks';
import NoteGrid from './components/note_grid';

import { Note, User as UserType } from '~/utils/interfaces';

export default function User() {
  const { props, url } = usePage();
  const user: any & UserType = props.user;
  const [showAll, setShowAll] = useState<boolean>(false);
  const [currentNote, setCurrentNote] = useState<Note>({
    userId: user.id,
    title: '',
    content: '',
  });
  const { post } = useForm();
  const notes = useFetch<Note[]>(`${url}/notes`);

  const createNewNote = () => {
    setCurrentNote({
      userId: user.id,
      title: '',
      content: '',
    });
    setShowAll(false);
  };

  return (
    <div className="flex flex-row text-slate-600">
      <aside className="w-1/4 text-start min-h-screen max-h-screen overflow-auto">
        <Logo className="flex flex-row max-h-full mt-0.5" />
        <div className="float float-right mt-2 mb-3 me-5">
          <button
            className="bg-purple-800 hover:bg-purple-900 text-white px-4 py-2 rounded-2xl"
            onClick={createNewNote}
          >
            <Plus />
          </button>
        </div>
        <p
          className={
            showAll
              ? 'flex justify-between mt-2 mx-2 py-2 px-5 text-2xl text-white bg-purple-800 hover:bg-purple-900 rounded-xl clear-both'
              : 'flex justify-between mt-2 mx-2 py-2 px-5 text-2xl text-purple-800 bg-purple-100 hover:bg-purple-800 hover:text-white rounded-xl clear-both'
          }
          onClick={() => (showAll ? setShowAll(false) : setShowAll(true))}
        >
          <span className="w-4/5">
            <span className="flex flex-row gap-3">
              <NotepadText size={24} />
              <span className="text-lg">Notes </span>
            </span>
            <span className="float float-end w-1/5 -mt-7 -me-14">
              <ArrowRightCircle />
            </span>
          </span>
        </p>

        <div className="mx-2 text-purple-800 mt-60 rounded-xl shadow-xl">
          <div className="flex flex-row gap-5 py-2 ps-7 bg-purple-100 text-purple-800 rounded-t-xl">
            <img
              src="https://placehold.co/50"
              alt="Profile image"
              className="text-xs rounded-full"
            />
            <p className="text-lg font-bold mt-3">{user?.username ? user.username : user?.email}</p>
          </div>
          <div>
            <div
              className="hover:bg-purple-800 hover:text-white ps-7 py-2"
              onClick={() => router.get(`${url}/profile`)}
            >
              Profile
            </div>
            <div
              className="hover:bg-purple-800 hover:text-white ps-7 py-2 rounded-b-xl"
              onClick={() => post('/logout')}
            >
              Logout
            </div>
          </div>
        </div>
      </aside>
      <main className="flex flex-col min-h-screen max-h-screen overflow-auto bg-purple-100 w-3/4 pe-4">
        {!showAll && <Editor note={{ attrs: currentNote, setter: setCurrentNote }} />}
        <div className="ps-4 my-4">
          {notes && (
            <>
              <h2 className="flex flex-row gap-3 my-6 text-2xl text-purple-800 font-bold">
                <NotepadText size={24} className="mt-0.5" />
                My Notes
              </h2>
              <p className="mt-3 mb-2 ms-4 text-purple-800 text-md">
                {showAll ? 'All' : 'Recently viewed'}
              </p>
              {showAll ? (
                <NoteGrid
                  notes={notes}
                  currentNote={{
                    attrs: currentNote,
                    setter: { note: setCurrentNote, showAll: setShowAll },
                  }}
                />
              ) : (
                <NoteGrid
                  notes={notes.slice(0, 3)}
                  currentNote={{
                    attrs: currentNote,
                    setter: { note: setCurrentNote, showAll: setShowAll },
                  }}
                />
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
