import { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import { ArrowLeftCircle } from 'lucide-react';

import Logo from './components/logo';
import NameChangeForm from './components/forms/change_name';
import EmailChangeForm from './components/forms/change_email';
import PasswordChangeForm from './components/forms/change_password';
import UsernameChangeForm from './components/forms/change_username';
import { User } from '#utils/interfaces';

export default function UserUpdateForm() {
  const { props } = usePage();
  const user: any & User = props.user;

  return (
    <div className="flex flex-row">
      <aside className="w-1/4 text-start min-h-screen max-h-screen overflow-auto">
        <Logo className="flex flex-row max-h-full mt-0.5" />
        <ArrowLeftCircle
          className={"mt-2 ms-2 p-2 text-purple-800 hover:bg-purple-900 hover:text-white rounded-xl"}
          size={40}
          onClick={() => router.get(`/user/${user.id}`)}
        />

        <div className="mx-2 text-purple-800 mt-2 rounded-xl shadow-xl">
          <div>
            <p className="bg-purple-100 rounded-t-xl hover:bg-purple-800 hover:text-white hover:rounded-t-xl ps-7 py-2">
              Profile
            </p>
            <p
              className="hover:bg-purple-800 hover:text-white hover:rounded-b-xl ps-7 py-2"
              onClick={() => router.post('/logout')}
            >
              Logout
            </p>
          </div>
        </div>
      </aside>

      <div className="w-3/4 mx-auto px-10 pb-10 bg-purple-100 min-h-screen max-h-screen overflow-auto">
        <h1 className="mt-6 text-2xl text-purple-800 font-bold">Update User Information</h1>
        <hr className="bg-purple-300 h-0.5 my-6" />
        <NameChangeForm errors={props.errors} user={user} />
        <hr className="bg-purple-300 h-0.5 my-6" />
        <UsernameChangeForm errors={props.errors} user={user} />
        <hr className="bg-purple-300 h-0.5 my-6" />
        <EmailChangeForm errors={props.errors} user={user} />
        <hr className="bg-purple-300 h-0.5 my-6" />
        <PasswordChangeForm errors={props.errors} user={user} />
      </div>
    </div>
  );
}
