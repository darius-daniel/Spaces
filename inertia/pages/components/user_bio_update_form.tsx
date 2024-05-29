import EmailChangeForm from './forms/change_email';
import NameChangeForm from './forms/change_name';
import PasswordChangeForm from './forms/change_password';
import UsernameChangeForm from './forms/change_username';

export default function UserBioUpdateForm() {
  return (
    <div className="w-full mx-auto px-10 pb-10">
      <h1 className="mt-6 text-2xl text-purple-800 font-bold">Update User Information</h1>
      <hr className="bg-purple-300 h-0.5 my-6" />
      <NameChangeForm />
      <hr className="bg-purple-300 h-0.5 my-6" />
      <UsernameChangeForm />
      <hr className="bg-purple-300 h-0.5 my-6" />
      <EmailChangeForm />
      <hr className="bg-purple-300 h-0.5 my-6" />
      <PasswordChangeForm />
    </div>
  );
}
