import { useForm, usePage } from '@inertiajs/react';
import { FormProps } from '~/utils/interfaces';

export default function NameChangeForm({ user }: FormProps) {
  const { url } = usePage();
  const { data, setData, errors, patch } = useForm({
    firstName: user?.firstName,
    lastName: user?.lastName,
  });

  const errorStyles = 'w-1/2 ps-1 mt-0.5 text-pink-700 text-sm';
  const labelStyles = 'block ps-1 text-purple-800 text-sm';

  function handleChange(event: { target: { id: any; value: any } }) {
    setData((formData: any) => ({
      ...formData,
      [event.target.id]: event.target.value,
    }));
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    console.log(url);
    patch(`${url}`);
  }

  return (
    <form className="flex flex-row gap-2" onSubmit={handleSubmit}>
      <div className="w-1/3 text-purple-800">
        <h2 className="text-xl mb-2">Change Full Name</h2>
        <p className="text-xs">Update your full name</p>
      </div>
      <div className="w-2/3 gap-2">
        <label htmlFor="firstName" className={'w-1/2 ' + labelStyles}>
          First Name
        </label>
        <input
          type="text"
          value={data.firstName}
          id="firstName"
          placeholder="First"
          onChange={handleChange}
          className="block w-2/3 py-2 ps-5 text-sm bg-slate-50 rounded-xl border border-3 border-purple-200 hover:border-purple-400"
        />
        <p className={errorStyles}>{errors?.firstName}</p>

        <label htmlFor="lastName" className={'w-1/2 mt-2' + labelStyles}>
          Last Name
        </label>
        <input
          type="text"
          value={data.lastName}
          id="lastName"
          placeholder="Last"
          onChange={handleChange}
          className="block w-2/3 py-2 ps-5 bg-slate-50 text-sm rounded-xl border border-3 border-purple-200 hover:border-purple-400 "
        />
        <p className={errors?.lastName ? errorStyles : errorStyles + ' mb-4'}>{errors?.lastName}</p>

        <div className="w-2/3 text-right">
          <button
            type="submit"
            className="me-1 px-6 py-2 bg-purple-800 text-white text-md rounded-xl border-none hover:bg-purple-900"
          >
            Update
          </button>
        </div>
      </div>
    </form>
  );
}
