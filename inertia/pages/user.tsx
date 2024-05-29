import { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { ArrowRightCircle, CircleUser, NotepadText, Plus } from 'lucide-react';

import Logo from './components/logo';
import Editor from './components/editor';
import { useFetch } from '~/utils/hooks';
import NoteGrid from './components/note_grid';
import UserBioUpdateForm from './components/user_bio_update_form';

import { Note, User as UserType } from '~/utils/interfaces';

export default function User() {
  const { props, url } = usePage();
  const user: any & UserType = props.$attributes;
  const [showAll, setShowAll] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);
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
    setShowOptions(false);
  };

  return (
    <div className="flex flex-row text-slate-600">
      <aside className="w-1/4 text-start min-h-screen max-h-screen overflow-auto">
        <Logo className="flex flex-row max-h-full mt-0.5" />
        <div className="float float-right mt-6 mb-3 me-5">
          <button
            className="bg-purple-400 hover:bg-purple-800 text-white px-4 py-2 rounded-xl"
            onClick={createNewNote}
          >
            <Plus />
          </button>
        </div>
        <p
          className={
            showAll
              ? 'flex justify-between mt-2 mx-5 py-2 px-5 text-2xl text-white bg-purple-800 hover:bg-purple-900 rounded-lg clear-both'
              : 'flex justify-between mt-2 mx-5 py-2 px-5 text-2xl text-purple-800 bg-purple-200 hover:bg-purple-800 hover:text-white rounded-lg clear-both'
          }
          onClick={() => {
            setShowProfile(false);
            showAll ? setShowAll(false) : setShowAll(true);
          }}
        >
          <span className="w-4/5">
            <span className="flex flex-row gap-3">
              <NotepadText size={24} className="mt-0.5" />
              <span>Notes </span>
            </span>
            <span className="float float-end w-1/5 -mt-7 -me-14">
              <ArrowRightCircle />
            </span>
          </span>
        </p>

        <div
          className={
            showOptions
              ? 'bg-purple-50 text-purple-800 mt-80 rounded-xl shadow-xl'
              : 'bg-purple-200 text-purple-800 mt-80 rounded-xl shadow-xl'
          }
        >
          <div
            className="flex flex-row w-full gap-6 px-5 bg-purple-200 hover:bg-purple-800 hover:text-white rounded-lg"
            onClick={() => (showOptions ? setShowOptions(false) : setShowOptions(true))}
          >
            <CircleUser size={46} /> <span className="mt-2.5 text-md">Username</span>
          </div>
          {showOptions && (
            <ul className="mt-2 rounded-b-2xl">
              <li
                className="bg-purple-50 hover:bg-purple-300 ps-7 py-2"
                onClick={() => setShowProfile(true)}
              >
                Profile
              </li>
              <li
                className="bg-purple-50 hover:bg-purple-300 ps-7 py-2"
                onClick={() => post('/logout')}
              >
                Logout
              </li>
            </ul>
          )}
        </div>
      </aside>
      <main className="flex flex-col min-h-screen max-h-screen overflow-auto bg-purple-100 w-3/4 pe-4">
        {showProfile ? (
          <UserBioUpdateForm />
        ) : (
          <>
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
          </>
        )}
      </main>
    </div>
  );
}
