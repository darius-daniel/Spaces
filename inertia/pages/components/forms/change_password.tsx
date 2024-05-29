import { usePage, useForm } from '@inertiajs/react';
import { User } from '~/utils/interfaces';

export default function PasswordChangeForm() {
  const { props } = usePage();
  const user: any & User = props.$attributes;
  const { data, setData, patch, errors, processing } = useForm({
    password: '',
    password_confirmation: '',
    currentPassword: '',
  });

  const errorStyles = 'ps-1 -mt-4 mb-3 text-pink-500 text-sm';
  const labelStyles = 'ps-1 text-purple-800 text-sm';

  function handleChange(event: { target: { id: any; value: any } }) {
    const key = event.target.id === 'password2' ? 'password' : event.target.id;
    const value = event.target.value;
    setData((formData: any) => ({
      ...formData,
      [key]: value,
    }));
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    patch(`/user/${user.id}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row">
        <div className="w-1/3 text-purple-800">
          <h2 className="text-xl mb-2">Change Password</h2>
          <p className="text-xs">Update your account's password</p>
        </div>

        <div className="w-2/3">
          <label htmlFor="password" className={labelStyles}>
            Password
          </label>
          <div className="w-full flex flex-row">
            <input
              type="password"
              value={data.password}
              id="password2"
              placeholder="Password"
              onChange={handleChange}
              className="block w-2/3 mb-2 py-2 ps-5 bg-slate-50 text-sm placeholder:text-sm rounded-lg border border-3 border-viole-100 hover:border-viole-300 focus:bg-viole-50"
            />
          </div>
          {errors.password && <p className={errorStyles}>{errors.password}</p>}

          <label htmlFor="password_confirmation" className={labelStyles}>
            Re-enter Password
          </label>
          <input
            type="password"
            value={data.currentPassword}
            id="password_confirmation"
            placeholder="Re-enter Password"
            onChange={handleChange}
            className="block w-2/3 mb-2 py-2 ps-5 bg-slate-50 text-sm placeholder:text-sm rounded-lg border border-3 border-violet-100 hover:border-violet-300 focus:bg-violet-50"
          />
          {errors.password_confirmation && <p>{errors.password_confirmation}</p>}

          <label htmlFor="currentPassword" className={labelStyles}>
            Enter current password
          </label>
          <input
            type="password"
            value={data.currentPassword}
            id="currentPassword"
            placeholder="Enter current password"
            onChange={handleChange}
            className="block w-2/3 mb-5 py-2 ps-5 bg-slate-50 text-sm placeholder:text-sm rounded-lg border border-3 border-violet-100 hover:border-violet-300 focus:bg-violet-50"
          />
          {errors.currentPassword && <p>{errors.currentPassword}</p>}

          <div className="btns w-2/3 text-right">
            <button
              type="submit"
              className="me-1 px-6 py-2 bg-violet-600 text-white text-md rounded-xl border-none hover:bg-violet-800"
              disabled={processing}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
