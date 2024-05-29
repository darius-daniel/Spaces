import { usePage, useForm } from '@inertiajs/react';
import { User } from '~/utils/interfaces';

export default function EmailChangeForm() {
  const { props } = usePage();
  const user: any & User = props.$attributes;
  const { data, setData, patch, errors, processing } = useForm({
    email: user.email,
    password: '',
  });

  const errorStyles = 'ps-1 -mt-4 mb-3 text-pink-500 text-sm';
  const labelStyles = 'ps-1 text-purple-800 text-sm';

  function handleChange(event: { target: { id: any; value: any } }) {
    setData((formData: any) => ({
      ...formData,
      password: event.target.value,
    }));
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    patch(`/user/${user.id}`);
  }

  return (
    <form className="flex flex-row" onSubmit={handleSubmit}>
      <div className="w-1/3 text-purple-800">
        <h2 className="text-xl mb-2">Change Email</h2>
        <p className="text-xs">Update your account's email address</p>
      </div>
      <div className="w-2/3">
        <label htmlFor="email" className={labelStyles}>
          Email
        </label>
        <input
          type="email"
          value={data.email}
          id="email"
          placeholder="E-mail"
          onChange={handleChange}
          className="block w-2/3 mb-2 py-2 ps-5 bg-slate-50 text-sm placeholder:text-sm rounded-lg border border-3 border-purple-100 hover:border-purple-300 focus:bg-purple-50"
        />
        {errors.email && <p className={errorStyles}>{errors.email}</p>}

        <label htmlFor="password" className={labelStyles}>
          Password
        </label>
        <div className="w-full flex flex-row">
          <input
            type="password"
            value={data.password}
            id="password1"
            placeholder="Password"
            onChange={handleChange}
            className="block w-2/3 mb-5 py-2 ps-5 text-sm placeholder:text-sm bg-slate-50 rounded-lg border border-3 border-viole-100 hover:border-viole-300 focus:bg-viole-50"
          />
        </div>
        {errors.password && <p className={errorStyles}>{errors.password}</p>}

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
    </form>
  );
}
