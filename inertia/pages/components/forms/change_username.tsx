import axiosInstance from '#utils/axios_instance';
import { useForm } from '@inertiajs/react';
import { FormProps } from '~/utils/interfaces';

export default function UsernameChangeForm({ errors, user }: FormProps) {
  const { data, setData } = useForm({
    username: user?.username,
  });

  const errorStyles = 'ps-1 text-pink-700 text-sm';
  const labelStyles = 'ps-1 text-purple-800 text-sm';

  function handleChange(event: { target: { id: any; value: any } }) {
    const key = event.target.id === 'password1' ? 'password' : event.target.id;
    const value = event.target.value;
    setData((formData: any) => ({
      ...formData,
      [key]: value,
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
        <h2 className="text-xl mb-2">Change Username</h2>
        <p className="text-xs">Update your publicly displayed username</p>
      </div>
      <div className="w-2/3">
        <label htmlFor="username" className={labelStyles}>
          Username
        </label>
        <input
          type="text"
          value={data.username}
          id="username"
          placeholder="Username"
          onChange={handleChange}
          className="block w-2/3 mb-1 py-2 ps-5 bg-slate-50 text-sm placeholder:text-sm rounded-lg border border-3 border-purple-100 hover:border-purple-300 focus:bg-purple-50"
        />
        <p className={errors?.username ? errorStyles : errorStyles + ' mb-4'}>{errors?.username}</p>
        <div className="btns w-2/3 text-right">
          <button
            type="submit"
            className="me-1 px-6 py-2 bg-purple-800 hover:bg-purple-900 text-white text-md rounded-xl border-none"
          >
            Update
          </button>
        </div>
      </div>
    </form>
  );
}
