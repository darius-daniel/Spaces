import axiosInstance from '#utils/axios_instance';
import { useForm } from '@inertiajs/react';
import { FormProps } from '~/utils/interfaces';

export default function EmailChangeForm({ errors, user }: FormProps) {
  const { data, setData } = useForm({
    email: user?.email,
    password: '',
  });

  const errorStyles = 'ps-1 text-pink-700 text-sm';
  const labelStyles = 'ps-1 text-purple-800 text-sm';

  function handleChange(event: { target: { id: any; value: any } }) {
    const key = event.target.id === 'password1' ? 'password' : event.target.id;
    setData((formData: any) => ({
      ...formData,
      [key]: event.target.value,
    }));
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    try {
      await axiosInstance.patch(`/user/${user.id}/profile`, data);
    } catch (error) {
      console.error(error.message);
    }
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
          className="block w-2/3 mb-1 py-2 ps-5 bg-slate-50 text-sm placeholder:text-sm rounded-lg border border-3 border-purple-100 hover:border-purple-300 focus:bg-purple-50"
        />
        <p className={errorStyles}>{errors?.email}</p>

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
            required={true}
            className="block w-2/3 mb-1 py-2 ps-5 text-sm placeholder:text-sm bg-slate-50 rounded-lg border border-3 border-viole-100 hover:border-viole-300 focus:bg-viole-50"
          />
        </div>
        <p className={errors?.email ? errorStyles : errorStyles + ' mb-4'}>{errors?.email}</p>

        <div className="btns w-2/3 text-right">
          <button
            type="submit"
            className="me-1 px-6 py-2 bg-purple-800 text-white text-md rounded-xl border-none hover:bg-purple-900 disabled:bg-purple-400"
          >
            Update
          </button>
        </div>
      </div>
    </form>
  );
}
